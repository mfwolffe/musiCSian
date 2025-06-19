import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import TypedNavbar from "./components/TybedNavbar/TypedNavbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "matt wolffe | Musi(CS)ian",
  description: "Personal site of matt wolffe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="coffee">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <TypedNavbar />

        {children}
      </body>
    </html>
  );
}
