import type { Metadata } from "next";
import "./globals.css";
import { SiteFooter, SiteHeader } from "@/components/sites/rutvi-portfolio/site-shell";
import { SiteMotion } from "@/components/sites/rutvi-portfolio/site-motion";

export const metadata: Metadata = {
  title: "Rutvi Purohit | Product Designer",
  description:
    "Product Designer with 5+ years of experience shaping product strategy, systems, and complex workflows across enterprise products and digital experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">Skip to Main Content</a>
        <SiteHeader />
        {children}
        <SiteFooter />
        <SiteMotion />
      </body>
    </html>
  );
}
