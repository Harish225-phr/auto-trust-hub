// Vercel Node serverless function that adapts the TanStack Start
// Web-standard fetch handler (built to dist/server/index.js) into a
// Node (req, res) handler.
//
// The SSR bundle exports a default `{ fetch(Request): Promise<Response> }`
// which is the standard Web-platform server entry produced by
// `@tanstack/react-start` when no platform-specific adapter (e.g. the
// Cloudflare Workers plugin) is configured.

import { Readable } from "node:stream";
import serverEntry from "../dist/server/index.js";

function buildRequest(req) {
  const host = req.headers["x-forwarded-host"] || req.headers.host || "localhost";
  const proto = req.headers["x-forwarded-proto"] || "https";
  const url = new URL(req.url || "/", `${proto}://${host}`);

  const headers = new Headers();
  for (const [key, value] of Object.entries(req.headers)) {
    if (Array.isArray(value)) {
      for (const v of value) headers.append(key, v);
    } else if (value !== undefined) {
      headers.set(key, String(value));
    }
  }

  const method = (req.method || "GET").toUpperCase();
  const hasBody = method !== "GET" && method !== "HEAD";
  const body = hasBody ? Readable.toWeb(req) : undefined;

  return new Request(url.toString(), {
    method,
    headers,
    body,
    // Required when streaming a body in Node's undici-based fetch.
    duplex: hasBody ? "half" : undefined,
  });
}

async function sendResponse(webRes, res) {
  res.statusCode = webRes.status;
  webRes.headers.forEach((value, key) => {
    res.setHeader(key, value);
  });

  if (!webRes.body) {
    res.end();
    return;
  }

  const nodeStream = Readable.fromWeb(webRes.body);
  nodeStream.pipe(res);
  await new Promise((resolve, reject) => {
    nodeStream.on("end", resolve);
    nodeStream.on("error", reject);
  });
}

export default async function handler(req, res) {
  try {
    const request = buildRequest(req);
    const response = await serverEntry.fetch(request);
    await sendResponse(response, res);
  } catch (err) {
    console.error("[vercel-ssr] Unhandled error:", err);
    if (!res.headersSent) {
      res.statusCode = 500;
      res.setHeader("content-type", "text/plain");
    }
    res.end("Internal Server Error");
  }
}
