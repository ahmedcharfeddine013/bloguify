import { sideBarLinks } from "@/constants";
import Link from "next/link";
import React from "react";

const SideBarMobile = ({ toggled }: { toggled: boolean }) => {
  return (
    <div className="flex flex-col gap-4">
      {sideBarLinks.map((link, i) => (
        <Link key={i} href={link.link} className="text-lg">
          {link.title}
        </Link>
      ))}
    </div>
  );
};

export default SideBarMobile;
