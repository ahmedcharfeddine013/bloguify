"use client";
import React, { useState } from "react";
import Logo from "../Logo";
import SearchForm from "../forms/SearchForm";
import { Button } from "../ui/button";
import { BellRing } from "lucide-react";
import SearchFormMobile from "../forms/SearchFormMobile";
import { Menu } from "lucide-react";
import SideBarMobile from "../sidebar/SideBarMobile";
import { X } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Navbar = () => {
  const [toggled, setToggled] = useState(false);

  useGSAP(() => {
    if (!toggled) {
      gsap.to("#mobile_sidebar", {
        opacity: 0,
        x: -300,
        duration: 0.5,
      });
    }
    if (toggled) {
      gsap.to("#mobile_sidebar", {
        opacity: 1,
        x: 0,
        duration: 0.5,
        ease: "power4.out",
      });
    }
  }, [toggled]);
  return (
    <nav className="py-3 shadow-md flex w-full h-20 flec items-center fixed justify-between px-6 md:px-20 border-b bg-background">
      <div className="flex items-center justify-between w-full relative">
        <div
          id="mobile_sidebar"
          className={` fixed -translate-x-60 opacity-0 left-0 top-0 p-5 space-y-6 bg-background shadow-xl h-full border`}
        >
          <div className="flex items-center justify-between gap-3">
            <h1 className="text-2xl font-bold">DEVIA Community</h1>
            <Button className="w-8 h-8 p-0" onClick={() => setToggled(false)}>
              <X className="w-6 h-6" />
            </Button>
          </div>
          <SideBarMobile toggled={toggled} />
        </div>

        <div className="flex items-center justify-start w-full gap-4">
          <Button
            className="p-0 bg-transparent h-8 w-8 lg:hidden"
            onClick={() => setToggled(!toggled)}
          >
            <Menu className="w-6 h-6" />
          </Button>
          <Logo />
          <SearchForm />
        </div>
        <div className="flex items-center justify-end w-full gap-5">
          <Button className="hidden lg:block">Create post</Button>
          <SearchFormMobile />
          <div>
            <BellRing className="w-6 h-6" />
          </div>
          <Button className="rounded-full w-10 h-10">AC</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
