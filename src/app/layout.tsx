import type { Metadata } from "next";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "GTM Codex | Erik Hernal",
    template: "%s | GTM Codex",
  },
  description:
    "The GTM engineering codex. Cold email, Clay, automation, and pipeline systems. Built by Erik Hernal.",
  openGraph: {
    title: "GTM Codex | Erik Hernal",
    description:
      "The GTM engineering codex. Cold email, Clay, automation, and pipeline systems.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navigation />
        <main className="relative mx-auto max-w-6xl px-4 sm:px-6 py-10 binary-cant-bg">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
