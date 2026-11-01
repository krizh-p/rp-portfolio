import type { Metadata } from "next";
import "./globals.css";
import { SiteFooter, SiteHeader } from "@/components/sites/rutvi-portfolio/site-shell";
import { SiteMotion } from "@/components/sites/rutvi-portfolio/site-motion";
import { publicAsset, type PublicAssetPath } from "@/components/sites/rutvi-portfolio/media";

const fontFaces = [
  ["Rutvi Body", "/sites/rutvi-portfolio/fonts/body.woff2", "400", "normal"],
  ["SF Pro Display", "/sites/rutvi-portfolio/fonts/sf-pro-display.woff2", "400", "normal"],
  ["SF Pro Display Medium", "/sites/rutvi-portfolio/fonts/sf-pro-display-medium.woff2", "400", "normal"],
  ["SF Pro Display", "/sites/rutvi-portfolio/fonts/sf-pro-display-bold.woff2", "700", "normal"],
  ["Space Grotesk", "/sites/rutvi-portfolio/fonts/space-grotesk-bold.woff2", "300 700", "normal"],
  ["SF Pro Text Semibold", "/sites/rutvi-portfolio/fonts/sf-pro-text-semibold.woff2", "400", "normal"],
  ["Wix Madefor Text", "/sites/rutvi-portfolio/kerzner/madefor-text.woff2", "100 900", "normal"],
  ["Helvetica W01 Roman", "/sites/rutvi-portfolio/fonts/helvetica-w01-roman.woff2", "400", "normal"],
  ["Libre Baskerville", "/sites/rutvi-portfolio/fonts/libre-baskerville-regular.woff2", "400", "normal"],
  ["Libre Baskerville", "/sites/rutvi-portfolio/fonts/libre-baskerville-italic.woff2", "400", "italic"],
  ["Libre Baskerville", "/sites/rutvi-portfolio/fonts/libre-baskerville-bold.woff2", "700", "normal"],
  ["About SF Display Regular", "/sites/rutvi-portfolio/fonts/sf-pro-display.woff2", "400", "normal"],
].map(([family, path, weight, style]) =>
  `@font-face{font-family:"${family}";src:url("${publicAsset(path as PublicAssetPath)}") format("woff2");font-style:${style};font-weight:${weight};font-display:swap;}`,
).join("");

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
      <head>
        <style>{`:root{--footer-wave-url:url("${publicAsset("/sites/rutvi-portfolio/footer-wave.svg")}")}${fontFaces}`}</style>
      </head>
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
