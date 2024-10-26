import React from "react";
import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";

const Layout = ({ children }) => {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar di sebelah kiri */}
      <Sidebar />
      
      {/* Konten halaman di sebelah kanan */}
      <div className="flex-1 px-6 bg-gray-100 dark:bg-zinc-900">
      <Topbar />
        {children}
      </div>
    </div>
  );
};

export default Layout;
