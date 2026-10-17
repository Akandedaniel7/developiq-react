import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import '../../Styles/premium.css';

const navItems = [
  { to: '/Service', label: 'Services' },
  { to: '/SoftwareLicensing', label: 'Licensing' },
  { to: '/Portfolio', label: 'Our Work' },
  { to: '/TechnologyPartnerships', label: 'Partnerships' },
  { to: '/About', label: 'About' }
];

export const Brand = () => (
  <NavLink to="/" className="di-brand" aria-label="Develop-IQ Technologies home">
    <span className="di-brand-mark" aria-hidden="true"><span /></span>
    <span className="di-brand-name">develop<span style={{color:'#347fed'}}>-iq</span><em>.</em></span>
  </NavLink>
);

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => { setOpen(false); }, [location.pathname]);
  useEffect(() => {
    const onKeyDown = (event) => { if (event.key === 'Escape') setOpen(false); };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, []);

  return (
    <header className="di-header">
      <div className="di-container di-header-inner">
        <Brand />
        <nav className="di-desktop-nav" aria-label="Main navigation">
          {navItems.map(({to, label}) => (
            <NavLink key={to} to={to} className={({isActive}) => 'di-nav-link' + (isActive ? ' active' : '')}>{label}</NavLink>
          ))}
        </nav>
        <NavLink className="di-nav-cta" to="/Contact">Start a conversation <span aria-hidden="true">↗</span></NavLink>
        <button type="button" className="di-mobile-toggle" aria-label={open ? 'Close navigation' : 'Open navigation'}
          aria-expanded={open} aria-controls="di-mobile-navigation" onClick={() => setOpen(!open)}>
          {open
            ? <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M5 5l14 14M19 5L5 19"/></svg>
            : <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg>}
        </button>
        <nav id="di-mobile-navigation" className={'di-mobile-menu' + (open ? ' open' : '')}
          aria-label="Mobile navigation" aria-hidden={!open}>
          <NavLink to="/" tabIndex={open ? 0 : -1}>Home</NavLink>
          {navItems.map(({to,label}) => <NavLink key={to} to={to} tabIndex={open ? 0 : -1}>{label}</NavLink>)}
          <NavLink to="/Contact" className="di-mobile-cta" tabIndex={open ? 0 : -1}>Start a conversation ↗</NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
