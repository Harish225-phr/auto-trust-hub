import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "IronFix — Professional Car Repair & Auto Service" },
      {
        name: "description",
        content:
          "Trusted car repair, engine service, denting & painting, AC repair, detailing. Certified mechanics, modern equipment, same-day delivery.",
      },
      { name: "author", content: "IronFix Auto Service" },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "IronFix — Professional Car Repair & Auto Service" },
      { name: "twitter:title", content: "IronFix — Professional Car Repair & Auto Service" },
      { name: "description", content: "Auto Trust Hub is a professional car repair and auto service website designed to build trust and drive bookings." },
      { property: "og:description", content: "Auto Trust Hub is a professional car repair and auto service website designed to build trust and drive bookings." },
      { name: "twitter:description", content: "Auto Trust Hub is a professional car repair and auto service website designed to build trust and drive bookings." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/64a936d0-0300-4a39-b9e2-def0307a7778/id-preview-31cf315f--f5a2fd03-6956-43ae-b306-9f7e2cfe5160.lovable.app-1776937099583.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/64a936d0-0300-4a39-b9e2-def0307a7778/id-preview-31cf315f--f5a2fd03-6956-43ae-b306-9f7e2cfe5160.lovable.app-1776937099583.png" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
