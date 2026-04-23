// Netlify Edge Function that adapts the TanStack Start
// Web-standard fetch handler into a Netlify function

import serverEntry from "../dist/server/server.js";

export default async (req, context) => {
  try {
    console.log("[netlify-ssr] Incoming request:", req.url, req.method);

    if (!serverEntry || typeof serverEntry.fetch !== "function") {
      console.error("[netlify-ssr] Invalid serverEntry:", {
        type: typeof serverEntry,
        hasFetch: serverEntry ? typeof serverEntry.fetch : "undefined"
      });
      return new Response(
        JSON.stringify({
          status: 500,
          message: "Server entry not properly initialized"
        }),
        {
          status: 500,
          headers: { "content-type": "application/json" }
        }
      );
    }

    const response = await serverEntry.fetch(req);
    return response;
  } catch (err) {
    console.error("[netlify-ssr] Unhandled error:", err);
    return new Response("Internal Server Error", { status: 500 });
  }
};
