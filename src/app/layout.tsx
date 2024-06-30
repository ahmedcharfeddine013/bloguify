import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/Providers/theme-provider";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Devia",
  description:
    "DEVIA, your go-to hub for the latest in tech and development! Dive into a world of exciting articles, expert insights, and the newest trends, all in one sleek and easy-to-use platform. Whether you're a tech enthusiast or just curious about the digital world, DEVIA has something for you. Join our community and stay ahead with DEVIA!",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
