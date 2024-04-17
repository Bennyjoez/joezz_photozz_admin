import useActiveRoute from "../../hooks/Route.hooks";
import SearchBox from "../search/Search";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiSettings } from "react-icons/ci";
import profile from "/BEN.jpg"; //TODO: replace with a dynamic image

const DesktopNavbar = () => {
  const activeRoute = useActiveRoute();

  const handleSearch = (query: string) => {
    // TODO: Perform search logic here...
    console.log("Searching for:", query);
  };
  const openSettings = () => {
    // TODO: settings logic here...
    console.log("Opening settings");
  };
  const openNotifications = () => {
    // TODO: notifications logic here...
    console.log("Opening notifications");
  };

  return (
    <div className="flex items-center justify-between w-[calc(100vw - 200px)] bg-white h-[80px] p-4 align-bottom shadow-sidebar">
      <h1 className="text-4xl h-fit text-primary-text font-bold">{activeRoute}</h1>

      {/* right navbar*/}
      <div className="flex items-center min-w-[500px] gap-4 h-[80%]">
        <SearchBox onSearch={handleSearch} />
        <span className="cursor-pointer text-2xl bg-primary-bg rounded-full p-1" onClick={openSettings}>
          <CiSettings />
        </span>
        <span className="cursor-pointer text-2xl bg-primary-bg rounded-full p-1" onClick={openNotifications}>
          <IoIosNotificationsOutline />
        </span>
        <img
          src={profile}
          alt="profile"
          className="cursor-pointer rounded-full h-[100%]"
        />
      </div>
    </div>
  );
};

export default DesktopNavbar;
