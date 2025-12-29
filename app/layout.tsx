import type { Metadata } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";

import "./globals.css";
import JsonLd from "./components/JsonLd";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Christopher Bartha",
  description:
    "Full-Stack Software Engineer focused on backend systems, data pipelines, and applied machine learning. Building scalable, production-grade software.",
  keywords: [
    "Christopher Bartha",
    "Software Engineer",
    "Backend Engineer",
    "Full-Stack Engineer",
    "Machine Learning",
    "Data Engineering",
    "Distributed Systems",
    "Python",
    "PostgreSQL",
    "Next.js",
  ],
  authors: [{ name: "Christopher Bartha" }],
  openGraph: {
    title: "Christopher Bartha | Software Engineer",
    description:
      "Full-Stack Software Engineer focused on backend systems, data pipelines, and applied machine learning.",
    url: "https://chrisbartha.com",
    siteName: "Christopher Bartha",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL("https://chrisbartha.com"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
          href="https://fonts.googleapis.com/css2?family=Geist+Mono:wght@400;500&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={inter.variable}>
        {/* Load exact versions requested (three r134 + vanta 0.5.24) */}
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"
          strategy="beforeInteractive"
        />
        <Script
          src="https://cdn.jsdelivr.net/npm/vanta@0.5.24/dist/vanta.waves.min.js"
          strategy="beforeInteractive"
        />
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
