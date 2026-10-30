import type { Metadata } from "next";
import { AboutPage } from "@/components/sites/rutvi-portfolio/about/about-page";

export const metadata: Metadata = {
  title: "About | RutviP - UX Designer",
  description: "As a UX Designer my passion for UX stems from my love for behavioral psychology and delighting people through intentional designs.",
};

export default function Page() {
  return <AboutPage />;
}
