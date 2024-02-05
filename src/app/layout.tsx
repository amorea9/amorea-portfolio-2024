import type { Metadata } from "next";
import "@/src/app/ui/globals.css";
import { inter, libreBaskerville, notoSans } from "@/src/app/ui/fonts";

export const metadata: Metadata = {
  title: "Alessia Amore | Portfolio 2024",
  description: "Hi, I am Alessia a front-end developer, check out my portfolio!",
  keywords: "Alessia Amore KEA student designer developer software front-end app digital design creative design portfolio Copenhagen Denmark amorea",
  robots: "index,follow,archive",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth overflow-x-hidden">
      <body className={notoSans.className}>{children}</body>
    </html>
  );
}
