import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";

import { Geist, Geist_Mono } from "next/font/google";
// import localFont from "next/font/local";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// const satoshiBold = localFont({
//   src: "../assets/fonts/Satoshi-Bold.woff2",
//   variable: "--font-satoshi",
//   weight: "700",
//   display: "swap",
// });

export const metadata: Metadata = {
  metadataBase: new URL("https://uginium.com"),

  title: {
    default: "UGinium",
    template: "%s | UGinium",
  },

  description:
    "The university-exclusive collaboration platform where students build profiles, form Guilds, create projects, participate in hackathons, and grow their professional legacy.",

  applicationName: "UGinium",

  authors: [
    {
      name: "UGinium Team",
    },
  ],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "dark",
  themeColor: "#0B0B0C",
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({
  children,
}: Readonly<RootLayoutProps>) {
  return (
    <html
      lang="en"
      className="dark"
      suppressHydrationWarning
    >
      <body
        className={[
          geistSans.variable,
          geistMono.variable,
          // satoshiBold.variable,
          "min-h-dvh",
          "bg-surface-950",
          "text-text-primary",
          "antialiased",
        ].join(" ")}
      >
        {children}
      </body>
    </html>
  );
}