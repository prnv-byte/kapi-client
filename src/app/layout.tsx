import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { NoiseBackground } from "@/components/NoiseBackground";
import FloatingParticles from "@/components/FloatingParticles";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["300", "400", "500", "600"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "The Scene Within | Dr. Maya Reynolds",
  description: "A quiet space for the thoughts you don't always understand, but feel deeply anyway.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="antialiased">
        <div className="ambient-bg" />
        <FloatingParticles />
        <NoiseBackground />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}