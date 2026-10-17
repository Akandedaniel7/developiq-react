import React from 'react';
import { Link } from 'react-router-dom';
import '../../Styles/premium.css';

const Footer = () => (
  <footer className="di-footer">
    <div className="di-container">
      <div className="di-footer-grid">
        <div>
          <Link to="/" className="di-brand" aria-label="Develop-IQ Technologies home">
            <span className="di-brand-mark" aria-hidden="true"><span /></span>
            <span className="di-brand-name">develop<span style={{color:'#74c8ff'}}>-iq</span><em>.</em></span>
          </Link>
          <p className="di-footer-about">Thoughtful software engineering, eligible technology licensing and meaningful partnerships. Based in Nigeria, working with businesses worldwide.</p>
        </div>
        <div className="di-footer-col">
          <h3>Explore</h3>
          <Link to="/Service">Our services</Link>
          <Link to="/Portfolio">Selected work</Link>
          <Link to="/About">About the studio</Link>
        </div>
        <div className="di-footer-col">
          <h3>Commercial</h3>
          <Link to="/SoftwareLicensing">Software licensing</Link>
          <Link to="/TechnologyPartnerships">Partnerships</Link>
          <Link to="/Contact">Get in touch</Link>
        </div>
        <div className="di-footer-col">
          <h3>Start a conversation</h3>
          <p>Tell us about your software requirements or commercial partnership goals.</p>
          <a href="mailto:developiq01@gmail.com?subject=Develop-IQ%20Inquiry">developiq01@gmail.com ↗</a>
        </div>
      </div>
      <div className="di-footer-lower">
        <p>© {new Date().getFullYear()} Develop-IQ Technologies. All rights reserved.</p>
        <span>Engineering with intention.</span>
      </div>
    </div>
  </footer>
);

export default Footer;
