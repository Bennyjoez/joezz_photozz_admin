import { NavOptions } from "./NavOptions";
import { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { useLocation } from "react-router-dom";
import profile from "/BEN.jpg";
import SearchBox from "../search/Search";

interface MobileNavbarProps {
  showMobileNav: boolean;
  setShowMobileNav: (value: boolean) => void;
}

const MobileNavbar: React.FC<MobileNavbarProps> = ({
  showMobileNav,
  setShowMobileNav,
}) => {
  const [activeRoute, setActiveRoute] = useState("Dashboard");
  const location = useLocation();

  const toggleMobileNav = () => {
    setShowMobileNav(!showMobileNav);
  };

  const handleSearch = (query: string) => {
    // TODO: Perform search logic here...
    console.log("Searching for:", query);
  };

  useEffect(() => {
    switch (location.pathname) {
      case "/":
        setActiveRoute("Dashboard");
        break;
      case "/messages":
        setActiveRoute("Message");
        break;
      case "/bookings":
        setActiveRoute("Bookings");
        break;
      default:
        setActiveRoute("Dashboard");
        break;
    }
  }, [location]);

  return (
    <section>
      <div className="flex relative p-4 justify-between text-xl text-primary-text font-bold h-[70px]">
        <GiHamburgerMenu onClick={toggleMobileNav} />
        <div>{activeRoute}</div>
        <img src={profile} alt="profile" className="rounded-full" />
        <NavOptions showMobileNav={showMobileNav} />
      </div>

      <SearchBox onSearch={handleSearch} />
    </section>
  );
};

export default MobileNavbar;
