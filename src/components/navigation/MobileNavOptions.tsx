import React from "react";
import { NavLink } from "react-router-dom";

interface NavOptionsProps {
  showMobileNav: boolean;
}

export const MobileNavOptions: React.FC<NavOptionsProps> = ({ showMobileNav }) => {
  return (
    <div className={showMobileNav ? "flex flex-col absolute left-0 top-[100%] p-4 bg-accent text-white font-normal z-10" : "hidden"}>
      <NavLink className="hover:bg-primary-text p-2 navlink-mobile" to="/">Dashboard</NavLink>
      <NavLink className="hover:bg-primary-text p-2 navlink-mobile" to="/profile">Profile</NavLink>
      <NavLink className="hover:bg-primary-text p-2 navlink-mobile" to="/bookings">Bookings</NavLink>
      <NavLink className="hover:bg-primary-text p-2 navlink-mobile" to="/messages">Messages</NavLink>
    </div>
  );
};
