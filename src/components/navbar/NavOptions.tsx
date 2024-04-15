import React from "react";
import { Link } from "react-router-dom";

interface NavOptionsProps {
  showMobileNav: boolean;
}

export const NavOptions: React.FC<NavOptionsProps> = ({ showMobileNav }) => {
  return (
    <ul className={showMobileNav ? "block absolute left-0 top-[100%] p-4 bg-accent text-white font-normal" : "hidden"}>
      <li>
        <Link to="/">Dashboard</Link>
      </li>
      <li>
        <Link to="/profile">Profile</Link>
      </li>
      <li>
        <Link to="/bookings">Bookings</Link>
      </li>
      <li>
        <Link to="/messages">Messages</Link>
      </li>
    </ul>
  );
};
