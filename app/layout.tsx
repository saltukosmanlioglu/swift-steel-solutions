import type { Metadata } from "next";
import { Jost } from "next/font/google";

import "./globals.css";

const jost = Jost({ subsets: ["latin"] });

export const metadata: Metadata = {
  authors: {
    name: "Saltuk Osmanlıoğlu",
  },
  icons: {
    icon: "/images/logo.png",
  },
  other: {
    email: "saltuk.osmanlioglu@gmail.com",
  },
  title: "SWIFT Steel Solitions | Official Web Site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={jost.className}>{children}</body>
    </html>
  );
}
