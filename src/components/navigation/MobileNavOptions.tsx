import React from "react";
import { Link } from "react-router-dom";

interface NavOptionsProps {
  showMobileNav: boolean;
}

export const NavOptions: React.FC<NavOptionsProps> = ({ showMobileNav }) => {
  return (
    <div className={showMobileNav ? "flex flex-col absolute left-0 top-[100%] p-4 bg-accent text-white font-normal z-10" : "hidden"}>
      <Link className="hover:bg-primary-text p-2" to="/">Dashboard</Link>
      <Link className="hover:bg-primary-text p-2" to="/profile">Profile</Link>
      <Link className="hover:bg-primary-text p-2" to="/bookings">Bookings</Link>
      <Link className="hover:bg-primary-text p-2" to="/messages">Messages</Link>
    </div>
  );
};
