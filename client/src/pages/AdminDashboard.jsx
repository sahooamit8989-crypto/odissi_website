import React from "react";
import AppSidebar from "../componets/AppSidebar";
import { Outlet } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <>
      <AppSidebar />

      {/* MAIN CONTENT AREA */}
      <main className="pt-16 md:ml-64 px-4 pb-20">
        <Outlet />
      </main>
    </>
  );
};

export default AdminDashboard;

