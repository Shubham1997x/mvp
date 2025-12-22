"use client";

import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "@/components/ErrorFallback";
import type { ErrorInfo } from "react";

// Error logging function for production
const logError = (error: Error, errorInfo: ErrorInfo) => {
  // In production, send to error tracking service (e.g., Sentry, LogRocket)
  if (process.env.NODE_ENV === "production") {
    // Example: errorTrackingService.log(error, errorInfo);
    // For now, we'll just log - replace with actual service
    console.error("Error caught by boundary:", error, errorInfo);
  } else {
    // In development, log to console
    console.error("Error caught by boundary:", error, errorInfo);
  }
};

export default function ErrorBoundaryWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onError={logError}
      onReset={() => {
        // Reset app state if needed
        // The ErrorFallback component handles the reset via resetErrorBoundary
        // This callback is called when resetErrorBoundary is invoked
      }}
    >
      {children}
    </ErrorBoundary>
  );
}

