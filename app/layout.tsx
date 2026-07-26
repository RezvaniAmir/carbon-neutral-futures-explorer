import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Carbon-Neutral Futures Explorer",
  description:
    "An AI-supported urban decision platform for exploring pathways to carbon neutrality.",
  metadataBase: new URL("https://example.com"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "Carbon-Neutral Futures Explorer",
    description:
      "Explore how connected urban systems, stakeholder knowledge and spatial scenarios can support pathways to carbon neutrality.",
    type: "website",
    images: ["/images/hero/future-city.png"],
  },
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
