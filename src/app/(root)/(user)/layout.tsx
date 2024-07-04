"use client";

import React, { ReactNode, useEffect, useRef, useState } from "react";
import Navbar from "../../../components/layout/Navbar";
import SideBar from "@/components/sidebar/SideBar";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { Toaster } from "@/components/ui/toaster";
gsap.registerPlugin(ScrollTrigger);

const UserLayout = ({ children }: { children: ReactNode }) => {
  const sidebarRef = useRef<HTMLDivElement>(null);
  const [isFixed, setIsFixed] = useState(true);

  // useEffect(() => {
  //   if (sidebarRef.current) {
  //     ScrollTrigger.create({
  //       trigger: sidebarRef.current,
  //       start: "top top+=200px",
  //       onEnter: () => setIsFixed(true),
  //       onLeaveBack: () => setIsFixed(false),
  //     });
  //   }
  // }, []);

  return (
    <div>
      <Navbar />
      <div className="py-32 flex w-full items-center justify-center lg:grid lg:grid-cols-4 px-3 md:px-10 gap-10">
        <div
          ref={sidebarRef}
          className={`bg-white/10 p-6 h-fit hidden lg:block  fixed top-32`}
        >
          <SideBar />
        </div>
        <div className="hidden lg:block"></div>
        <div className="p-6 bg-white/10 w-full lg:col-span-2">{children}</div>
      </div>
      <Toaster />
    </div>
  );
};

export default UserLayout;
