import React, { useState } from "react";
import { NavLink } from 'react-router-dom';
import Home from '../Home/Home';
import '../../Components/General.css';
import "./error.css";
import openIcon from '../../asstes/Icons/icons8-menu-24.png';
import closeIcon from '../../asstes/Icons/icons8-close-24.png';

const Error = () => {
  const [active, setActive] = useState("nav__menu");
  const [toggleIcon, setToggleIcon] = useState('nav__toggler');

  const navToggle = () => {
    active === "nav__menu"
      ? setActive("nav__menu nav__active")
      : setActive("nav__menu");

      //ToggleIcon

      toggleIcon === 'nav__toggler' ? setToggleIcon('nav__toggler toggle') : setToggleIcon('nav__toggler')
  };

  return (
    <div>
    <header id='header' className="fixed-top d-flex align-items-center">
    <div className="container d-flex align-items-center justify-content-between ">
    <div className="logo">
      <h1><NavLink to="/">Develop<span className="logo-span">IQ</span></NavLink></h1>
       
      </div>
      <nav id='navbar' className="navbar">
        <ul className={active}>
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
        <div onClick={navToggle} className={toggleIcon}>
        <img src={toggleIcon === 'nav__toggler' ? openIcon : closeIcon} alt="Toggle Icon" />
      </div>
      
      </nav>
      </div>
      </header>

      <Home />
    </div>
  );
};

export default Error;
