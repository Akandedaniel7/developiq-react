import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'boxicons/css/boxicons.min.css';

import menu from '../../asstes/Icons/icons8-menu-24.png';
import close from '../../asstes/Icons/icons8-close-24.png';

import './navbar.css'; // Your existing CSS
import '../General.css'; // Your existing CSS

const MobileNav = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      id="header"
      className={`fixed-top d-flex align-items-center nav-desktop ${
        isMobileMenuOpen ? 'show-mobile-menu' : ''
      }`}
    >
      <div className="container-fluid d-flex align-items-center justify-content-between">
        <div className="logo">
          <h1>
            <NavLink to="/">Develop<span className="logo-span">IQ</span></NavLink>
          </h1>
        </div>

        <button className="mobile-menu-button" onClick={toggleMobileMenu}>
          <img src={isMobileMenuOpen ? close : menu} alt="Menu" />
        </button>

        <nav id="navbar" className="navbar">
          <ul>
            <li>
              <NavLink to="/" className="nav-link scrollto">
                Home
              </NavLink>
            </li>

            <li>
              <NavLink className="nav-link scrollto" to="/About">
                About
              </NavLink>
            </li>

            <li>
              <NavLink className="nav-link scrollto" to="/Service">
                Service
              </NavLink>
            </li>

            <li>
              <NavLink className="nav-link scrollto" to="/Portfolio">
                Portfolio
              </NavLink>
            </li>

            <li>
              <NavLink className="nav-link scrollto" to="/Contact">
                Contact
              </NavLink>
            </li>

            <li>
              <NavLink className="getstarted scrollto" to="/Quote">
                REQUEST A QUOTE
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default MobileNav;



