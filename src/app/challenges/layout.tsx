import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Challenges - rebuildjs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
