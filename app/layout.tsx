import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MediMind Sense | Intelligent Medical Device Tracking",
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
