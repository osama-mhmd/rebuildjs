import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import NextTopLoader from 'nextjs-toploader';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Homepage - rebuildjs",
  description:
    "Enhance your coding skills by deconstructing and reconstructing some powerful tools, and gain a deeper mastery of Javascript",
  openGraph: {
    images: "/rebuildjs.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextTopLoader />
        {children}
        <Footer />
      </body>
    </html>
  );
}
