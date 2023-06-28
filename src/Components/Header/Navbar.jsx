import React from 'react';
import { NavLink } from 'react-router-dom';
import '../General.css';
import './navbar.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'boxicons/css/boxicons.min.css';


const Header = () => {
  // const [isOpen, setOpen] = useState(false);

    return(
        <header id="header" className="fixed-top d-flex align-items-center">
    <div className="container d-flex align-items-center justify-content-between">

      <div className="logo">
      <h1><NavLink to="/">Develop<span className="logo-span">IQ</span></NavLink></h1>
       
      </div>

      <nav id="navbar" className="navbar">
        <ul>
          <li>
          <NavLink to="/" className="nav-link scrollto ">Home</NavLink>
          </li>

          <li>
          <NavLink className="nav-link scrollto" to="/About">About</NavLink>
          </li>

          <li>
          <NavLink className="nav-link scrollto" to="/Service">Service</NavLink>
          </li>

          <li>
          <NavLink className="nav-link scrollto " to="/Portfolio">Portfolio</NavLink>
          </li>

          <li>
          <NavLink className="nav-link scrollto" to="/Contact">Contact</NavLink>
          </li>

          <li>
          <NavLink className="getstarted scrollto" to="/Quote">REQUEST A QUOTE</NavLink>
          </li>
        </ul>
        <i className="bi bi-list mobile-nav-toggle"></i>
      </nav>

    </div>
  </header>
    )
}

export default Header;