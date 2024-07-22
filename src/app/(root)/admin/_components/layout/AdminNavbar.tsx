"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { ComponentProps } from "react";

const AdminNavbar = () => {
  return (
    <nav className="bg-primary text-primary-foreground flex justify-center flex-col w-fit h-screen items-center">
      <NavLink href="/admin">Dashboard</NavLink>
      <NavLink href="/admin/products">Users</NavLink>
      <NavLink href="/admin/users">Customers</NavLink>
      <NavLink href="/admin/orders">Sales</NavLink>
    </nav>
  );
};

export default AdminNavbar;

export function NavLink(props: Omit<ComponentProps<typeof Link>, "className">) {
  const pathname = usePathname();
  return (
    <Link
      {...props}
      className={cn(
        "py-4 px-10 hover:bg-secondary hover:text-secondary-foreground focus-visible:bg-secondary focus-visible:text-secondary-foreground",
        pathname === props.href && "bg-background text-foreground"
      )}
    />
  );
}
