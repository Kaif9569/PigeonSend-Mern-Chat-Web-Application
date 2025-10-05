import { Suspense, ReactNode, useState, useEffect } from "react";

interface DelayedSuspenseProps {
  children: ReactNode;
  delay?: number; // milliseconds
}

const DelayedSuspense = ({ children, delay = 2000 }: DelayedSuspenseProps) => {
  const [showFallback, setShowFallback] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowFallback(false), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <Suspense
      fallback={
        showFallback ? (
          <div className="flex items-center justify-center h-screen text-xl font-semibold">
            PegionSend
          </div>
        ) : null
      }
    >
      {children}
    </Suspense>
  );
};

export default DelayedSuspense;
