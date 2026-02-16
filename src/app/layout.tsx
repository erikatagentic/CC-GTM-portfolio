import type { Metadata } from "next";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "GTM Playbook | Erik Hernal",
    template: "%s | GTM Playbook",
  },
  description:
    "The GTM engineering playbook. Cold email, Clay, automation, and pipeline systems. Built by Erik Hernal.",
  openGraph: {
    title: "GTM Playbook | Erik Hernal",
    description:
      "The GTM engineering playbook. Cold email, Clay, automation, and pipeline systems.",
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
        <main className="mx-auto max-w-6xl px-4 sm:px-6 py-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
