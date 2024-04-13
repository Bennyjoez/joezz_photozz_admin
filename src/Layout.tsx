import React, { ReactNode } from 'react';
import MobileNavbar from './components/navbar/Navbar';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <MobileNavbar />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
