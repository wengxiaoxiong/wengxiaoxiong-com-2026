import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Weng Xiaoxiong | Agent Systems Builder",
  description: "AI native agent systems builder and backend engineer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
