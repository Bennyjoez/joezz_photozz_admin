import { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { useLocation } from "react-router-dom";

const MobileNavbar = () => {
  const [activeRoute, setActiveRoute] = useState("Dashboard");
  const location = useLocation();

  useEffect(() => {
    switch(location) {
      case "/":
        setActiveRoute("Dashboard")
        break;
      case "/messages":
        setActiveRoute("Message")
        break;
      case "/bookings":
        setActiveRoute("Bookings")
        break;
      default:
        setActiveRoute("Dashboard")
        break;
    }
  }, [location])

  return (
    <div>
      <GiHamburgerMenu />
      <div>{activeRoute}</div>
      <div><img src="" alt="profile" /></div>
    </div>
  )
}

export default MobileNavbar