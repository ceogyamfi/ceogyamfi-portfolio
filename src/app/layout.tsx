import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "600", "700", "800"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500"],
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    default: "ceogyamfi",
    template: "%s | ceogyamfi",
  },
  description: "Software engineer, builder, and writer.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${syne.variable} ${dmSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
        style={{ fontFamily: "var(--font-body)" }}
      >
        {/* Gradient orb background — gives glass panels something to blur against */}
        <div className="orb-field" aria-hidden="true">
          <div className="orb orb-1" />
          <div className="orb orb-2" />
          <div className="orb orb-3" />
        </div>

        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  );
}
