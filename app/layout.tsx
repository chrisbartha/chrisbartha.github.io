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
    "Chris Bartha",
    "Machine Learning",
    "Software Engineer",
    "Backend Engineer",
    "Full-Stack Engineer",
    "Machine Learning",
    "Data Engineering",
    "Distributed Systems",
    "APIs",
    "Cloud Infrastructure",
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
  twitter: {
    card: "summary_large_image",
    title: "Christopher Bartha",
    description:
      "Full-Stack Software Engineer focused on backend systems, data pipelines, and applied machine learning.",
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
      <body className={inter.variable}>
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="https://cdn.jsdelivr.net/npm/vanta@0.5.24/dist/vanta.waves.min.js"
          strategy="afterInteractive"
        />
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
