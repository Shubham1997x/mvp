import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { QueryProvider } from "@/components/QueryProvider";
import { Toaster } from "sonner";
import ErrorBoundaryWrapper from "./error-boundary";
import { siteConfig } from "@/config/siteConfig";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: `MVP Wantace - Turn Your Idea Into a Working Prototype in 48 Hours`,
  description: siteConfig.meta.description,
  icons: {
    icon: "/logo.svg",
    shortcut: "/logo.svg",
    apple: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ colorScheme: "light" }}>
      <body
        className={`${spaceGrotesk.variable} antialiased`}
        suppressHydrationWarning
      >
        <ErrorBoundaryWrapper>
          <QueryProvider>
            {children}
            <Toaster position="top-right" richColors />
          </QueryProvider>
        </ErrorBoundaryWrapper>
      </body>
    </html>
  );
}

