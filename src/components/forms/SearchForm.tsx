import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Search } from "lucide-react";
const SearchForm = () => {
  return (
    <form className="flex items-center justify-center w-full ">
      <Input placeholder="Search..."></Input>
      <Button>
        <Search />
      </Button>
    </form>
  );
};

export default SearchForm;
