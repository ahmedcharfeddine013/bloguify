import React from "react";
import Logo from "../Logo";
import SearchForm from "../forms/SearchForm";
import { Button } from "../ui/button";
import { BellRing } from "lucide-react";
import { Avatar } from "../ui/avatar";
import { AvatarFallback } from "../ui/avatar";
import { AvatarImage } from "../ui/avatar";
import SearchFormMobile from '../forms/SearchFormMobile';

const Navbar = () => {
  return (
    <nav className="py-3 shadow-md flex w-full h-20 flec items-center fixed justify-between px-6 md:px-20">
      <div className="flex items-center justify-between w-full relative">
        <div className="flex items-center justify-start w-full gap-10">
          <Logo />
          <SearchForm />
        </div>
        <div className="flex items-center justify-end w-full gap-5">
          <Button className="hidden lg:block">Create post</Button>
          <SearchFormMobile />

          <BellRing />
          <Button className="rounded-full w-10 h-10">AC</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
