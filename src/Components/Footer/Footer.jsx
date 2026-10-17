import React from 'react';
import '../../Styles/premium.css';

const Footer=()=> <footer className="di-footer">
  <div className="di-container">
    <div className="di-footer-grid">
      <div>
        <a href="#top" className="di-brand" aria-label="Develop-IQ Technologies home">
          <span className="di-brand-mark" aria-hidden="true"><span/></span>
          <span className="di-brand-name">develop<span style={{color:'#74c8ff'}}>-iq</span><em>.</em></span>
        </a>
        <p className="di-footer-about">We create purposeful digital products and explore opportunities to put great technology to work.</p>
      </div>
      <div className="di-footer-col"><h3>Explore</h3><a href="#about">About us</a><a href="#services">Services</a><a href="#work">Selected work</a></div>
      <div className="di-footer-col"><h3>Commercial</h3><a href="#licensing">Software licensing</a><a href="#partnerships">Partnerships</a><a href="#contact">Contact</a></div>
      <div className="di-footer-col"><h3>Get in touch</h3><p>Have a development or licensing inquiry?</p><a href="mailto:developiq01@gmail.com">developiq01@gmail.com ↗</a></div>
    </div>
    <div className="di-footer-lower"><p>© {new Date().getFullYear()} Develop-IQ Technologies. All rights reserved.</p><span>Engineering with intention.</span></div>
  </div>
</footer>;
export default Footer;
