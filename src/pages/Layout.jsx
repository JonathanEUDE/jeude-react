import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import SocialNetworkBar from '../components/SocialNetworkBar';
import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import UpperBar from '../components/UpperBar';

function Layout() {
  return (
    <Fragment>
      <NavBar />
      <Outlet />
      <SocialNetworkBar />
      <UpperBar />
    </Fragment>
  );
}

export default Layout;
