import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `McDonald${"'"}s Clone`,
  description: "Najlepsza restauracja świata",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/mc-icon.png",
        href: "/mc-icon.png",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/mc-icon.png",
        href: "/mc-icon.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
