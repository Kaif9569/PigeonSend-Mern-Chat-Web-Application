import React from "react";

// src/utils/lazyWithDelay.ts
export const lazyWithDelay = (importFunc: () => Promise<{ default: any }>, delay: number = 2000) => {
  return React.lazy(() =>
    Promise.all([
      importFunc(),
      new Promise((resolve) => setTimeout(resolve, delay)), // minimum delay
    ]).then(([moduleExports]) => moduleExports)
  );
};
