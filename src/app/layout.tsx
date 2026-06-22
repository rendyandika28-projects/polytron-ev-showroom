import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "polytron-ev-showroom",
  description: "Landing page showroom motor listrik Polytron dengan katalog dan detail spesifikasi",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
