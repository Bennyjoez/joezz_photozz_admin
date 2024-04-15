import React, { ReactNode, useState } from 'react';
import MobileNavbar from './components/navbar/Navbar';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [showMobileNav, setShowMobileNav] = useState(false);
  return (
    <div>
      <MobileNavbar showMobileNav={showMobileNav} setShowMobileNav={setShowMobileNav} />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
