import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Slow Morocco Wiki",
  description: "Private knowledge wiki",
  robots: { index: false, follow: false, nocache: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-stone-900 antialiased">{children}</body>
    </html>
  );
}
