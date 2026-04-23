import React, { createContext, useContext, useEffect, useState } from "react";

interface TransitionContextType {
  isRevealing: boolean;
  hasStarted: boolean;
}

const TransitionContext = createContext<TransitionContextType>({
  isRevealing: false,
  hasStarted: false,
});

export function TransitionProvider({ children }: { children: React.ReactNode }) {
  const [isRevealing, setIsRevealing] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    // Initial delay before transition starts
    const startTimer = setTimeout(() => {
      setHasStarted(true);
      setIsRevealing(true);
    }, 200);

    // Matches the blind duration (1.0s) + initial delay
    const endTimer = setTimeout(() => {
      setIsRevealing(false);
    }, 1200);

    return () => {
      clearTimeout(startTimer);
      clearTimeout(endTimer);
    };
  }, []);

  return (
    <TransitionContext.Provider value={{ isRevealing, hasStarted }}>
      {children}
    </TransitionContext.Provider>
  );
}

export const useTransition = () => useContext(TransitionContext);
