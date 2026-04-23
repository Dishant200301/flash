import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Vertical Blind Transition Animation
 * 8 black columns simultaneously sliding from right to left [100% -> -100%]
 * revealing the content behind.
 */
export function BlindTransition({ trigger }: { trigger: string }) {
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    setIsDone(false);
    // After animation duration, we can potentially hide the container
    const t = setTimeout(() => setIsDone(true), 1500); 
    return () => clearTimeout(t);
  }, [trigger]);

  if (isDone) return null;

  return (
    <div className="fixed inset-0 z-[1000] flex pointer-events-none overflow-hidden">
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={i}
          className="h-full bg-[#000]"
          style={{ width: "12.5%" }}
          initial={{ x: "0%" }}
          animate={{ x: "-100%" }}
          transition={{
            duration: 1.0,
            ease: [0.77, 0, 0.175, 1],
            delay: 0.2, // Small delay for mount stability
          }}
        />
      ))}
    </div>
  );
}
