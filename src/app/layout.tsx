import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <footer className="text-center p-6 mt-4">
          Made by{" "}
          <a className="font-bold" href="https://os-mhmd.vercel.app">
            Osama Mohammed
          </a>
        </footer>
      </body>
    </html>
  );
}
