"use client";

import { useTheme } from "next-themes";

import React, { useEffect, useState } from "react";
import { Switch } from "./ui/switch";

export default function ThemeToggle() {
  const [theming, setTheming] = useState<"light" | "dark">("light");
  const { setTheme } = useTheme();
  useEffect(() => {
    function changeTheme() {
      setTheme(theming);
    }
    changeTheme();
  }, [setTheme, theming]);
  return (
    <Switch
      onClick={() =>
        theming == "light" ? setTheming("dark") : setTheming("light")
      }
    ></Switch>
  );
}
