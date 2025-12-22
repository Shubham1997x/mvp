import { FallbackProps } from "react-error-boundary";
import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";

export function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
  return (
    <div
      className="flex min-h-screen items-center justify-center bg-gray-50 px-4"
      role="alert"
      aria-live="assertive"
    >
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-6 text-center">
        <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-4" aria-hidden="true" />
        <h2 className="text-xl font-semibold text-gray-900 mb-2">
          Something went wrong
        </h2>
        <p className="text-gray-600 mb-6">
          We're sorry, but something unexpected happened. Please try refreshing the page or contact support if the problem persists.
        </p>
        <div className="flex gap-3 justify-center">
          <Button
            onClick={resetErrorBoundary}
            className="bg-primary-cta hover:bg-primary-cta-hover focus:outline-none focus:ring-2 focus:ring-primary-cta focus:ring-offset-2"
            aria-label="Try again to recover from error"
          >
            Try Again
          </Button>
          <Button
            onClick={() => window.location.reload()}
            variant="outline"
            aria-label="Refresh the entire page"
          >
            Refresh Page
          </Button>
        </div>
        {process.env.NODE_ENV === "development" && error && (
          <details className="mt-4 text-left">
            <summary className="cursor-pointer text-sm text-gray-500 mb-2 hover:text-gray-700">
              Error Details (Development Only)
            </summary>
            <pre className="text-xs bg-gray-100 p-3 rounded overflow-auto max-h-40">
              {error.message}
              {error.stack && `\n\n${error.stack}`}
            </pre>
          </details>
        )}
      </div>
    </div>
  );
}

