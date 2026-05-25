import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GMS AI — AI Operating System for Modern Garages",
  description:
    "GMS AI by Developer Box AI. Streamline workshop operations, automate customer management, and grow your garage with AI-powered tools.",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "GMS AI · Garage Master",
    description: "A clean AI operating system for modern garages.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Plus+Jakarta+Sans:wght@600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-w-0 antialiased">{children}</body>
    </html>
  );
}
