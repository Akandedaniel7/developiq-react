import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';
import './commercial.css';

const Hero = () => (
  <section id="hero" className="home-commercial-hero d-flex align-items-center">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-7">
          <span className="commercial-eyebrow">SOFTWARE ENGINEERING · TECHNOLOGY ASSETS</span>
          <h1>We build, license and deliver software.</h1>
          <p className="commercial-hero-subtitle">Custom software engineering for ambitious businesses. Explore white-label opportunities, selected technology assets and technical partnerships with Develop-IQ Technologies.</p>
          <div className="commercial-hero-actions">
            <Link className="commercial-primary-btn" to="/SoftwareLicensing">Explore software opportunities →</Link>
            <Link className="commercial-secondary-btn" to="/Service">Our development services</Link>
          </div>
          <p className="commercial-hero-note">Based in Nigeria · Web, mobile and business applications · Commercial inquiries welcome</p>
        </div>
        <div className="col-lg-5">
          <div className="commercial-hero-visual" aria-label="Develop-IQ technology services">
            <div className="commercial-window-top"><i/><i/><i/><span>DEVELOP-IQ / ENGINEERING</span></div>
            <div className="commercial-visual-label">BUILT FOR REAL BUSINESS</div>
            <div className="commercial-visual-heading">From working code<br/>to commercial value.</div>
            <div className="commercial-tech-row"><span>↗ Software delivery</span><span>↗ White-label licensing</span><span>↗ Asset acquisition</span><span>↗ AI partnerships</span></div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
