import { NavLink } from "react-router-dom";
import logo from "/logo.png";
import { IoIosHome } from "react-icons/io";
import { AiFillProfile, AiFillMessage } from "react-icons/ai";
import { FaCalendarCheck } from "react-icons/fa";
import { TfiControlForward, TfiControlBackward } from "react-icons/tfi";
import { useState } from "react";

const Sidebar = () => {
  const [sideOpen, setSidebarOpen] = useState(false);
  return (
    <section
      className={`${
        sideOpen ? "w-[200px] duration-300 ease-in-out" : "w-fit duration-300 ease-in-out"
      } bg-white shadow-sidebar flex flex-col align-center gap z-10 font-madimi`}
    >
      <div className="grid place-items-center p-2 h-[80px]">
        <img src={logo} alt="Logo" className="h-10" />
      </div>
      <div className={`${!sideOpen ? "text-8rem" : ""} flex flex-col relative`}>
        <NavLink
          className={`${sideOpen ? "" : "icons"} navlink`}
          to="/"
          title={sideOpen ? "" : "Dashboard"}
        >
          <IoIosHome />
          {sideOpen && <span>Dashboard</span>}
        </NavLink>
        <NavLink
          className={`${sideOpen ? "" : "icons"} navlink`}
          to="/profile"
          title={sideOpen ? "" : "Profile"}
        >
          <AiFillProfile />
          {sideOpen && <span>Profile</span>}
        </NavLink>
        <NavLink
          className={`${sideOpen ? "" : "icons"} navlink`}
          to="/bookings"
          title={sideOpen ? "" : "Bookings"}
        >
          <FaCalendarCheck />
          {sideOpen && <span>Bookings</span>}
        </NavLink>
        <NavLink
          className={`${sideOpen ? "" : "icons"} navlink`}
          to="/messages"
          title={sideOpen ? "" : "Messages"}
        >
          <AiFillMessage />
          {sideOpen && <span>Messages</span>}
        </NavLink>
        <div className="text-xl text-primary-text font-bold cursor-pointer animate-pulse w-full grid place-content-end">
          {sideOpen ? (
            <TfiControlBackward
              title="Collapse"
              onClick={() => setSidebarOpen(!sideOpen)}
            />
          ) : (
            <TfiControlForward
              title="Expand"
              onClick={() => setSidebarOpen(!sideOpen)}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
