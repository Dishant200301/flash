import { useEffect, useRef } from "react";

/**
 * Adds .is-visible to any element that has .reveal-fade when it enters the viewport.
 * Re-triggers every time it scrolls in, removes when it scrolls out.
 */
export function useRevealOnScroll<T extends HTMLElement = HTMLElement>(
  options?: IntersectionObserverInit,
) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const root = ref.current ?? document.body;
    const targets = Array.from(root.querySelectorAll<HTMLElement>(".reveal-fade"));
    if (targets.length === 0) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          } else {
            entry.target.classList.remove("is-visible");
          }
        });
      },
      { threshold: 0.15, ...options },
    );

    targets.forEach((t) => io.observe(t));
    return () => io.disconnect();
  }, [options]);

  return ref;
}

/**
 * Count up animation that re-triggers on visibility change.
 */
export function useCountUp(
  target: number,
  duration = 1600,
  isActive = true,
): { value: number; ref: React.RefObject<HTMLDivElement | null> } {
  const ref = useRef<HTMLDivElement>(null);
  const valueRef = useRef(0);
  const [, force] = useStateForceUpdate();

  useEffect(() => {
    if (!isActive) {
      valueRef.current = 0;
      force();
      return;
    }
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      valueRef.current = Math.round(target * eased);
      force();
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [isActive, target, duration, force]);

  return { value: valueRef.current, ref };
}

import { useReducer, useCallback } from "react";
function useStateForceUpdate(): [number, () => void] {
  const [n, dispatch] = useReducer((x: number) => x + 1, 0);
  const force = useCallback(() => dispatch(), []);
  return [n, force];
}
