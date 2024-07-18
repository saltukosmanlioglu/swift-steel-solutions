import type { Metadata } from "next";
import { Outfit } from "next/font/google";

import Footer from "@/components/layout/footer";
import Web from "@/components/layout/menu/web";

import "./globals.css";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  authors: {
    name: "Saltuk Osmanlıoğlu",
    url: "milabilisim.com.tr",
  },
  icons: {
    icon: "/images/logo.png",
  },
  other: {
    email: "saltuk.osmanlioglu@gmail.com",
  },
  title: "SWIFT Steel Solutions | Official Web Site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <main>
          <Web menuItems={[]} />
          <div>{children}</div>
          <Footer />
        </main>
      </body>
    </html>
  );
}
