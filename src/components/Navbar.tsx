import React from "react";
import ThemeToggle from "./ThemeToggle";
import Link from "next/link";
import LoginButton from "./LoginButton";
import { getServerSession } from "next-auth";
import SignOutButton from "./auth/SignOutButton";
import { getSession } from "next-auth/react";

export default async function Navbar() {
  const session = await getSession();

  return (
    <nav className="flex items-center justify-around py-4 w-full fixed">
      <div className="flex items-center justify-center gap-4 text-md">
        <div className="relative">
          <Link href={"/"}>Home</Link>
          <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-gray-700 dark:bg-gray-200 transition-all duration-300"></span>
          <span></span>
        </div>
        <div className="relative">
          <Link href={"/"}>Contact</Link>
          <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-gray-700 dark:bg-gray-200 transition-all duration-300"></span>
        </div>
        <div className="relative">
          <Link href={"/"}>About Us</Link>
          <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-gray-700 dark:bg-gray-200 transition-all duration-300"></span>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <ThemeToggle />
        {!session ? <LoginButton /> : <SignOutButton />}
      </div>
    </nav>
  );
}
