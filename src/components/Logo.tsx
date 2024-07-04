import Image from "next/image";
import React from "react";
import logo from "../../public/logo.png";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <Image src={logo} alt="DEVIA" height={100} width={100} />
    </Link>
  );
};

export default Logo;
