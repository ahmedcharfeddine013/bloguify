"use client";

import React, { ReactNode, useEffect, useRef, useState } from "react";
import Navbar from "../../../components/layout/Navbar";
import SideBar from "@/components/sidebar/SideBar";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
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
      <div className="py-32 grid grid-cols-4 px-10 gap-10">
        <div ref={sidebarRef}  className={`bg-white/10 p-6 h-fit  fixed top-32`}>
          <SideBar />
        </div>
        <div></div>
        <div className="p-6 bg-white/10 col-span-2">{children}</div>
      </div>
    </div>
  );
};

export default UserLayout;
