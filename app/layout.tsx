import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "MediMind Track | Intelligent Medical Device Tracking",
  description:
    "Real-time visibility for mobile medical equipment with battery-free tracking, minimal infrastructure, and a pilot-first approach.",
  keywords: [
    "medical device tracking",
    "hospital equipment tracking",
    "RTLS",
    "asset tracking",
    "healthcare",
    "battery-free tracking",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
