import React, { useState } from "react";
import DashboardSidebar from "../components/DashboardSidebar";
import { Outlet } from "react-router-dom";
import { FiMenu } from "react-icons/fi";

const DashboardLayout = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex h-screen w-full bg-[var(--secondary-color)] relative">
      {/* Sidebar for large screens */}
      <div className="hidden md:block w-full  lg:w-[22%]">
        <DashboardSidebar />
      </div>

      {/* Drawer Sidebar for small screens */}
      <div
        className={`fixed top-0 left-0 h-full w-full bg-[#444B58] shadow-lg z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}
      >
        <DashboardSidebar setIsOpen={setIsOpen} />
      </div>

      {/* Overlay when drawer is open */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
        ></div>
      )}

      {/* Main Content */}
      <div className="flex-1 w-full overflow-auto">
        <Outlet />
      </div>

      {/* Floating Menu Button (Mobile Only) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-5 right-5 z-50 p-3 bg-[var(--primary-color)] border border-white text-white rounded-full shadow-lg md:hidden"
      >
        <FiMenu size={24} />
      </button>
    </div>
  );
};

export default DashboardLayout;
