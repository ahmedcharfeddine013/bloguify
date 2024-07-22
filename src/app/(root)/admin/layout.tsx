import React, { ReactNode } from "react";
import AdminNavbar from "./_components/layout/AdminNavbar";

const AdminLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <div className="fixed top-0">
        <AdminNavbar />
      </div>
      <div className="pl-48 py-10">{children}</div>
    </div>
  );
};

export default AdminLayout;
