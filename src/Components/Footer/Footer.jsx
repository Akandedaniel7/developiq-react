import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';
import '../General.css';
const Footer = () => (
  <footer className="w-100 py-4 flex-shrink-0">
    <div className="container py-4">
      <div className="row gy-4 gx-5">
        <div className="col-lg-5 col-md-6 linkAll">
          <h5 className="h3 text-white">Develop-IQ Technologies</h5>
          <p className="small text-muted">Custom software engineering, eligible software asset licensing and technology partnerships.</p>
          <p className="small text-muted">Nigeria · Working with businesses worldwide</p>
        </div>
        <div className="col-lg-3 col-md-6 linkAll">
          <h5 className="text-white mb-3">Explore</h5>
          <ul className="list-unstyled">
            <li><Link to="/Service">Development Services</Link></li>
            <li><Link to="/Portfolio">Selected Work</Link></li>
            <li><Link to="/SoftwareLicensing">Software Licensing</Link></li>
            <li><Link to="/TechnologyPartnerships">Technology Partnerships</Link></li>
            <li><Link to="/About">About</Link></li>
          </ul>
        </div>
        <div className="col-lg-4 col-md-12 linkAll">
          <h5 className="text-white mb-3">Let's talk</h5>
          <p className="small text-muted">Have a software requirement or want to discuss a commercial partnership?</p>
          <a href="mailto:developiq01@gmail.com?subject=Develop-IQ%20Inquiry">developiq01@gmail.com</a>
          <div className="mt-3"><Link to="/Contact">Contact us →</Link></div>
        </div>
      </div>
    </div>
    <div className="copyright">Copyright © {new Date().getFullYear()} Develop-IQ Technologies. All rights reserved.</div>
  </footer>
);
export default Footer;
