import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  title: "Infracodebase | AI-Native Cloud Infrastructure",
  description:
    "The agentic AI platform for creating production-ready, enterprise-grade cloud infrastructure you can trust.",
  metadataBase: new URL("https://pitch.infracodebase.com"),
  openGraph: {
    title: "Infracodebase | AI-Native Cloud Infrastructure",
    description:
      "The agentic AI platform for creating production-ready, enterprise-grade cloud infrastructure you can trust.",
    url: "https://pitch.infracodebase.com",
    siteName: "Infracodebase",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Infracodebase | AI-Native Cloud Infrastructure",
    description:
      "The agentic AI platform for creating production-ready, enterprise-grade cloud infrastructure you can trust.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          href="https://stouse2icbprd.blob.core.windows.net/public/videos/NewAgentExperience.mp4"
          as="video"
          type="video/mp4"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
