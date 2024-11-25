import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './componenets/Footer';
import Nav from './componenets/Nav/Nav';
import Nav2 from './componenets/Nav/IndustryNav';

function Layout() {
  return (
    <>
      <Nav />
      {/* <Nav2 /> */}
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
