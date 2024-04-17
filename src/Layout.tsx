import React, { ReactNode, useEffect, useState } from 'react';
import MobileNavbar from './components/navigation/MobileNavbar';
import DesktopNavbar from './components/navigation/Sidebar';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [showMobileNav, setShowMobileNav] = useState(false);
  const [onMobile, setOnMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setOnMobile(window.innerWidth < 1024);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={!onMobile ? "flex bg-primary-bg h-screen" : ""}>
      {onMobile && <MobileNavbar showMobileNav={showMobileNav} setShowMobileNav={setShowMobileNav} />}
      {!onMobile && <DesktopNavbar />}
      <main>{children}</main>
    </div>
  );
};

export default Layout;
