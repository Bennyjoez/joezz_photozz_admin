import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const useActiveRoute = () => {
  const [activeRoute, setActiveRoute] = useState("Dashboard");
  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case "/":
        setActiveRoute("Dashboard");
        break;
      case "/profile":
        setActiveRoute("Profile");
        break;
      case "/messages":
        setActiveRoute("Message");
        break;
      case "/bookings":
        setActiveRoute("Bookings");
        break;
      default:
        setActiveRoute("");
        break;
    }
  }, [location]);

  return activeRoute;
}

export default useActiveRoute;