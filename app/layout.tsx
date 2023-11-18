import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "./Footer";
import GoogleAnalytics from "./GoogleAnalytics";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ppt-k amik kellhetnek",
  description: "🎼Ur welcoome🎼",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="hu">
      <body className={`{inter.className} bg-white dark:bg-[#111111]`}>
        <GoogleAnalytics />
        <div>{children}</div>
      </body>
    </html>
  );
}
