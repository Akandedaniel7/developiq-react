import React from 'react'

const MobileNav = () => {
  return (
    <div>
      
    </div>
  )
}

export default MobileNav

import React from 'react';
import { NavLink } from 'react-router-dom';
import '../General.css';
import './navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'boxicons/css/boxicons.min.css';
import MobileNavigation from './MobileNavigation'; // Import the MobileNavigation component

const MobileNav = () => {
  return (
    <header id="header" className="fixed-top d-flex align-items-center">
      <div className="container d-flex align-items-center justify-content-between">
        <div className="logo">
          <h1>
            <NavLink to="/">
              Develop<span className="logo-span">IQ</span>
            </NavLink>
          </h1>
        </div>

        {/* Include the MobileNavigation component */}
        <MobileNavigation />

      </div>
    </header>
  );
};

export default MobileNav;