import { useEffect } from "react";
import { useRouterState } from "@tanstack/react-router";

/**
 * Resets scroll position to top on every pathname change so users always
 * land at the top of any new page.
 */
export function ScrollToTop() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);

  return null;
}
