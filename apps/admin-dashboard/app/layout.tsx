import "./globals.css";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "Admin Dashboard to be handled by admins",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
