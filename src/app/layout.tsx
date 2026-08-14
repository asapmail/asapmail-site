import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Asapmail | Retention, CRM and Lifecycle Systems",
  description:
    "Senior-led lifecycle strategy, implementation and campaign production across email, SMS, push and in-app messaging.",
  openGraph: {
    title: "Asapmail | Retention, CRM and Lifecycle Systems",
    description:
      "Turn customer data into lifecycle journeys that activate, retain and grow users.",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
