import { NavLink } from "react-router-dom";
import logo from "/logo.png";

import { IoIosHome } from "react-icons/io";
import { AiFillProfile, AiFillMessage } from "react-icons/ai";
import { FaCalendarCheck } from "react-icons/fa";



const Sidebar = () => {
  return (
    <section className="w-[200px] bg-white shadow-sidebar flex flex-col align-center gap z-10" >
      <div className="grid place-items-center py-4">
        <img src={logo} alt="Logo" className="h-20" />
      </div>
      <div className="flex flex-col">
        <NavLink className="navlink" to="/">
          <IoIosHome />
          <span>Dashboard</span>
        </NavLink>
        <NavLink className="navlink" to="/profile">
          <AiFillProfile />
          <span>Profile</span>
        </NavLink>
        <NavLink className="navlink" to="/bookings">
          <FaCalendarCheck />
          <span>Bookings</span>
        </NavLink>
        <NavLink className="navlink" to="/messages">
          <AiFillMessage />
          <span>Messages</span>
        </NavLink>
      </div>
    </section>
  );
};

export default Sidebar;
