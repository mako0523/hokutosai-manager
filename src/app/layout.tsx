import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { H1 } from "@/components/H1";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "北斗祭管理者ページ",
  description: "投票数を確認するためのページです．",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <H1 text="北斗祭管理者ページ" />
        {children}
      </body>
    </html>
  );
}
