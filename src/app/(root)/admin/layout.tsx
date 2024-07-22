import React, { ReactNode } from "react";
import AdminNavbar from "./_components/layout/AdminNavbar";

const AdminLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <AdminNavbar />
      {children}
    </div>
  );
};

export default AdminLayout;
