import { Outlet, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { ScrollToTop } from "../lib/scroll-to-top";
import { NotFoundPage } from "../components/NotFound";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "FLASH — Cinematic Photography Portfolio" },
      {
        name: "description",
        content:
          "FLASH is a cinematic photography studio capturing weddings, portraits, and lifestyle stories with timeless emotion.",
      },
      { name: "author", content: "FLASH" },
      { property: "og:title", content: "FLASH — Cinematic Photography Portfolio" },
      {
        property: "og:description",
        content: "Wedding, portrait & lifestyle photography. Stories captured with emotion.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      {
        rel: "icon",
        type: "image/svg+xml",
        href: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' fill='black'/><circle cx='50' cy='50' r='30' fill='white'/></svg>",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundPage,
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
  return (
    <>
      <ScrollToTop />
      <Outlet />
    </>
  );
}
