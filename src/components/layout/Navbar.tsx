import React from "react";
import Logo from "../Logo";
import SearchForm from "../forms/SearchForm";
import { Button } from "../ui/button";
import { BellRing } from "lucide-react";
import { Avatar } from "../ui/avatar";
import { AvatarFallback } from "../ui/avatar";
import { AvatarImage } from "../ui/avatar";

const Navbar = () => {
  return (
    <nav className="py-3 shadow-md flex w-full h-20 flec items-center justify-between px-20">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center justify-start w-full gap-10">
          <Logo />
          <SearchForm />
        </div>
        <div className="flex items-center justify-end w-full gap-5">
          <Button>Create post</Button>
          <BellRing />
          <Button className="rounded-full w-10 h-10">AC</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
