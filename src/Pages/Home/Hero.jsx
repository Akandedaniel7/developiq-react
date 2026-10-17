import React from 'react';
import { Link } from 'react-router-dom';
import '../../Styles/premium.css';

const Hero = () => (
  <section className="di-hero" aria-labelledby="di-home-hero-title">
    <div className="di-container di-hero-inner">
      <div>
        <span className="di-hero-badge">Independent software engineering studio</span>
        <h1 id="di-home-hero-title">We turn <span>ambitious ideas</span> into working software.</h1>
        <p className="di-hero-summary">Custom digital products, ready-built technology and engineering partnerships — crafted for businesses that want to move with clarity and confidence.</p>
        <div className="di-hero-actions">
          <Link className="di-button di-button--primary" to="/SoftwareLicensing">Explore software licensing <span className="di-arrow" aria-hidden="true">↗</span></Link>
          <Link className="di-button di-button--outline" to="/Contact">Discuss a project <span className="di-arrow" aria-hidden="true">↗</span></Link>
        </div>
        <div className="di-hero-meta">
          <span>Nigeria-based</span><span>Web & mobile engineering</span><span>Global collaboration</span>
        </div>
      </div>
      <div className="di-showcase" role="img" aria-label="Illustrative diagram of Develop-IQ's software delivery, licensing and technology partnership capabilities">
        <div className="di-showcase-shadow" aria-hidden="true" />
        <div className="di-showcase-window">
          <div className="di-showcase-top"><span className="di-window-dots"><i/><i/><i/></span><span>DEVELOP-IQ / CAPABILITIES</span></div>
          <div className="di-showcase-body">
            <div className="di-showcase-kicker">One engineering partner. More possibilities.</div>
            <h2 className="di-showcase-title">From first concept to lasting value.</h2>
            <div className="di-showcase-divider" />
            <div className="di-showcase-row"><span className="di-showcase-icon">01</span>Custom development<small>Build</small></div>
            <div className="di-showcase-row"><span className="di-showcase-icon">02</span>Software licensing<small>Launch</small></div>
            <div className="di-showcase-row"><span className="di-showcase-icon">03</span>Technology partnerships<small>Partner</small></div>
          </div>
        </div>
        <div className="di-floating-chip">Built with <span>intention ↗</span></div>
      </div>
    </div>
  </section>
);

export default Hero;
