import React, { ReactNode, useEffect, useState } from 'react';
import MobileNavbar from './components/navigation/MobileNavbar';
import Sidebar from './components/navigation/Sidebar';
import DesktopNavbar from './components/navigation/DesktopNavbar';

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
      {!onMobile && <Sidebar />}
      <main className='flex-1'>
        {!onMobile && <DesktopNavbar />}
        <div className='p-2'>
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;
