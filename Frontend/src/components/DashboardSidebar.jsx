import React from "react";
import { NavLink } from "react-router-dom";
import { DashboardNavigation } from "../assets/ConstantData";

const DashboardSidebar = ({setIsOpen}) => {
  return (
    <div className="w-[100%] h-full bg-[#444B58] text-white flex flex-col justify-start pt-[50px]">
      {/* Logo Section */}
      <NavLink
        to="/dasboard"
        className=" border-gray-700  w-[100%] flex justify-start lg:justify-center items-start"
      >
        <img
          src="/assets/images/dashboard/logo.svg"
          alt="Dashboard Logo"
          className=""
        />
      </NavLink>

      {/* Navigation */}
      <nav className="flex flex-col p-4 space-y-3 mt-[50px]">
        {DashboardNavigation.map((item, index) => (
          <NavLink
          onClick={()=>setIsOpen(false)}
            key={index}
            to={item.path}
            end={item.end || false} // 👈 index route ke liye zaroori
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 font-[400] text-[14px] ${
                isActive ? "font-[600] text-[16px]" : "text-[16px]"
              }`
            }
          >
            <img src={item.icon} className="h-4 w-4" alt="" />
            {item.title}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default DashboardSidebar;
