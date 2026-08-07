import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Retention Agency Website — Development",
  description: "Development foundation for the retention agency website.",
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
