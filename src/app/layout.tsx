import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Asapmail — Retention, CRM & Lifecycle Systems",
  description:
    "Senior-led lifecycle strategy, implementation, automation, and campaign production across email, SMS, push, and in-app.",
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
