import React, { ReactNode, useEffect, useState } from 'react';
import MobileNavbar from './components/navbar/MobileNavbar';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [showMobileNav, setShowMobileNav] = useState(false);
  const [onMobile, setOnMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setOnMobile(window.innerWidth <= 768);
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
      <main>{children}</main>
    </div>
  );
};

export default Layout;
