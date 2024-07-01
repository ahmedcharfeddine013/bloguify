import { sideBarLinks } from "@/constants";
import Link from "next/link";
import React from "react";

const SideBar = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">DEVIA Community</h1>
      <div className="flex flex-col gap-4">
        {sideBarLinks.map((link, i) => (
          <Link
            key={i}
            href={link.link}
            className="text-md hover:text-primary duration-100 transition-colors ease-in"
          >
            {link.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
