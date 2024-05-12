import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/Providers/theme-provider";
import Navbar from "@/components/Navbar";
import { getServerSession } from "next-auth";
// import { authOptions } from "@/lib/auth";

import SessionProvider from "@/Providers/AuthProvider";
import { authOptions } from "./api/auth/[...nextauth]/route";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blog App - Ahmed Charfeddine",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(authOptions);
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider session={session}>
          <ThemeProvider attribute="class" defaultTheme="light">
            <Navbar />
            {children}
          </ThemeProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
