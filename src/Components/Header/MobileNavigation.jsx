import React, { useState } from 'react';
import { FaAlignJustify } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const MobileNavigation = () => {
  const [isOpen, setOpen] = useState(false);

  const toggleMobileNav = () => {
    setOpen(!isOpen);
  };

  return (
    <nav id="navbar-mobile" className={`navbar-mobile ${isOpen ? 'active' : ''}`}>
    <FaAlignJustify className={`bi bi-list mobile-nav-toggle ${isOpen ? 'bi-x' : ''}`} onClick={toggleMobileNav} />
      <ul>
        <li>
          <NavLink to="/" className="nav-link" onClick={toggleMobileNav}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/About" className="nav-link" onClick={toggleMobileNav}>About</NavLink>
        </li>
        <li>
          <NavLink to="/Service" className="nav-link" onClick={toggleMobileNav}>Service</NavLink>
        </li>
        <li>
          <NavLink to="/Portfolio" className="nav-link" onClick={toggleMobileNav}>Portfolio</NavLink>
        </li>
        <li>
          <NavLink to="/Contact" className="nav-link" onClick={toggleMobileNav}>Contact</NavLink>
        </li>
        <li>
          <NavLink to="/Quote" className="getstarted" onClick={toggleMobileNav}>REQUEST A QUOTE</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default MobileNavigation;
