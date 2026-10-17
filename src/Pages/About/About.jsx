import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../Components/Header/Navbar';
import Footer from '../../Components/Footer/Footer';
import '../../Styles/premium.css';

const principles = [
  { icon:'◇',title:'We begin with the problem',text:'Understanding the real challenge is the foundation of a useful product and a productive engagement.'},
  { icon:'▣',title:'We value engineering clarity',text:'From architecture to delivery, we aim for practical decisions, understandable scope and work that is maintainable.'},
  { icon:'↗',title:'We build for what comes next',text:'A successful handover leaves room for growth, iteration and ownership decisions that work for your business.'}
];

const About = () => (
  <div className="di-site">
    <Header/>
    <main className="di-page">
      <section className="di-page-hero">
        <div className="di-container">
          <span className="di-eyebrow">ABOUT DEVELOP-IQ</span>
          <h1>A focused software studio with a bigger outlook.</h1>
          <p>Develop-IQ Technologies is a Nigeria-based software development company working across web applications, mobile products and digital business systems. We bring the same thoughtful approach to custom engineering and selected technology partnerships.</p>
          <Link className="di-button di-button--primary" to="/Contact">Work with our team <span className="di-arrow" aria-hidden="true">↗</span></Link>
        </div>
      </section>
      <section className="di-section">
        <div className="di-container di-split">
          <div>
            <span className="di-eyebrow">OUR APPROACH</span>
            <h2>Built on thoughtful work, not noise.</h2>
            <p>Our six-person team works closely around software design, development and delivery. We value clear communication, sensible architecture and work that addresses meaningful business needs.</p>
            <p>In addition to custom projects, we explore responsible licensing of eligible company-owned software assets and engineering collaborations where the opportunity makes sense.</p>
            <Link className="di-button di-button--outline" to="/Portfolio">View selected work <span className="di-arrow" aria-hidden="true">↗</span></Link>
          </div>
          <div className="di-panel-visual" aria-hidden="true">
            <div className="di-panel-top">OUR FOCUS / DEVELOP-IQ</div>
            <div className="di-panel-code">
              <div><strong>01.</strong> Product thinking</div>
              <div><strong>02.</strong> Software engineering</div>
              <div><strong>03.</strong> Collaborative delivery</div>
              <div><strong>04.</strong> Long-term usefulness</div>
            </div>
          </div>
        </div>
      </section>
      <section className="di-section di-section--muted">
        <div className="di-container">
          <div className="di-section-intro">
            <span className="di-eyebrow">WHAT MATTERS TO US</span>
            <h2>Principles behind the work.</h2>
          </div>
          <div className="di-cards">
            {principles.map((p,i)=><article className="di-card" key={p.title}>
              <span className="di-card-icon" aria-hidden="true">{p.icon}</span><span className="di-card-counter">0{i+1} / PRINCIPLE</span>
              <h3>{p.title}</h3><p>{p.text}</p>
            </article>)}
          </div>
        </div>
      </section>
      <section className="di-cta-wrap" style={{paddingTop:85}}>
        <div className="di-container"><div className="di-cta">
          <div><span className="di-eyebrow di-eyebrow--light">TALK TO THE STUDIO</span><h2>Have something worth building?</h2><p>Tell us what you're working on and we'll discuss the right next step.</p></div>
          <Link className="di-button di-button--white" to="/Contact">Get in touch <span className="di-arrow" aria-hidden="true">↗</span></Link>
        </div></div>
      </section>
    </main>
    <Footer/>
  </div>
);
export default About;
