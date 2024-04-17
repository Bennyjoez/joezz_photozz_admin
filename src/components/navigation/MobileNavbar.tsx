import { NavOptions } from "./MobileNavOptions";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import profile from "/BEN.jpg";
import SearchBox from "../search/Search";
import useActiveRoute from "../../hooks/Route.hooks";

interface MobileNavbarProps {
  showMobileNav: boolean;
  setShowMobileNav: (value: boolean) => void;
}

const MobileNavbar: React.FC<MobileNavbarProps> = ({
  showMobileNav,
  setShowMobileNav,
}) => {
  const activeRoute = useActiveRoute();

  const toggleMobileNav = () => {
    setShowMobileNav(!showMobileNav);
  };

  const handleSearch = (query: string) => {
    // TODO: Perform search logic here...
    console.log("Searching for:", query);
  };

  return (
    <section>
      <div className="flex relative p-4 justify-between text-xl text-primary-text font-bold h-[70px]">
        {showMobileNav ? (
          <IoMdClose onClick={toggleMobileNav} className="cursor-pointer" />
        ) : (
          <GiHamburgerMenu
            onClick={toggleMobileNav}
            className="cursor-pointer"
          />
        )}
        <div>{activeRoute}</div>
        <img src={profile} alt="profile" className="rounded-full" />
        <NavOptions showMobileNav={showMobileNav} />
      </div>

      <SearchBox onSearch={handleSearch} />
    </section>
  );
};

export default MobileNavbar;
