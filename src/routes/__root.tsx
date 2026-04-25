import { Outlet, createRootRoute } from "@tanstack/react-router";
import { ScrollToTop } from "../lib/ScrollToTop";
import { NotFoundPage } from "../components/NotFound";

export const Route = createRootRoute({
  component: RootComponent,
  notFoundComponent: NotFoundPage,
});

function RootComponent() {
  return (
    <>
      <ScrollToTop />
      <Outlet />
    </>
  );
}
