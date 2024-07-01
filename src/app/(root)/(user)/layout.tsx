import React, { ReactNode } from "react";
import Navbar from "../../../components/layout/Navbar";

const UserLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Navbar />
      <div className="py-24">{children}</div>
    </div>
  );
};

export default UserLayout;
