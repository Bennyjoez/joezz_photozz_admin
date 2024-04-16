import React, { ReactNode, useEffect, useState } from 'react';
import MobileNavbar from './components/navbar/MobileNavbar';
import DesktopNavbar from './components/navbar/DesktopNavbar';

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
    <div>
      {onMobile && <MobileNavbar showMobileNav={showMobileNav} setShowMobileNav={setShowMobileNav} />}
      {!onMobile && <DesktopNavbar />}
      <main>{children}</main>
    </div>
  );
};

export default Layout;
