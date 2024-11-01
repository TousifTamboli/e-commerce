import React from "react";
import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";

const Sidebar = () => {
  return (
    <div className="w-[18%] min-h-screen border-r-2">
      <div className="flex flex-col gap-4 pt-6 pl-[20%] text-[15px]">
        <NavLink
          className="flex items-center gap-3 border border-gray-300 border-r-0 py-2 rounded-md" // Updated rounded class
          to="/add"
        >
          <img className="w-5 h-5 ml-2" src={assets.add_icon} alt="Add icon" />
          <p className="hidden md:block">Add items</p>
        </NavLink>
        
        <NavLink
          className="flex items-center gap-3 border border-gray-300 border-r-0 py-2 rounded-md" // Updated rounded class
          to="/add"
        >
          <img className="w-5 h-5 ml-2" src={assets.order_icon} alt="Add icon" />
          <p className="hidden md:block">List items</p>
        </NavLink>
        
        <NavLink
          className="flex items-center gap-3 border border-gray-300 border-r-0 py-2 rounded-md" // Updated rounded class
          to="/add"
        >
          <img className="w-5 h-5 ml-2" src={assets.order_icon} alt="Add icon" />
          <p className="hidden md:block">Orders</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
