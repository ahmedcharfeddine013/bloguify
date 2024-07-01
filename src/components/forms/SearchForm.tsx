import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Search } from "lucide-react";
const SearchForm = () => {
  return (
    <form className="items-center justify-center w-full hidden lg:flex">
      <Input placeholder="Search..."></Input>
      <Button>
        <Search />
      </Button>
    </form>
  );
};

export default SearchForm;
