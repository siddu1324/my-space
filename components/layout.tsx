import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout: React.FC = ({ children }) => (
  <div className="container">
    <Header />
    <main>{children}</main>
    <Footer />
  </div>
);

export default Layout;
