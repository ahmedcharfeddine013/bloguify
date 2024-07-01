"use client";

import React, { useState } from "react";
import { Button } from "../ui/button";
import { Search } from "lucide-react";
import { Input } from "../ui/input";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const SearchFormMobile = () => {
  const [toggled, setToggled] = useState(false);

  useGSAP(() => {
    if (!toggled) {
      gsap.to("#form", {
        opacity: 0,
        y: 100,
        duration: 0.5,
      });
    }
    if (toggled) {
      gsap.to("#form", {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power4.out",
      });
    }
  }, [toggled]);

  return (
    <div className=" flex w-full justify-end">
      <Button onClick={() => setToggled(!toggled)}>
        <Search />
      </Button>

      <form
        id="form"
        className="flex items-center justify-center w-full absolute opacity-0  -bottom-10 translate-y-20 right-0 "
      >
        <Input placeholder="Search..."></Input>
        <Button>
          <Search />
        </Button>
      </form>
    </div>
  );
};

export default SearchFormMobile;
