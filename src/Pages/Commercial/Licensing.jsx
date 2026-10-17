import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../Components/Header/Navbar';
import Footer from '../../Components/Footer/Footer';
import '../../Styles/premium.css';

const options=[
  {icon:'▣',num:'01 / WHITE LABEL',title:'License under your brand',text:'Explore independently owned software that may be adapted to your brand and deployment needs, subject to availability and agreed terms.'},
  {icon:'◇',num:'02 / ACQUISITION',title:'Acquire a software asset',text:'Discuss selected codebases and software rights for complete acquisition where ownership, transferability and scope can be established.'},
  {icon:'↗',num:'03 / IMPLEMENTATION',title:'Deploy with our help',text:'Engage the engineering team for implementation, customization, integrations or a separately scoped deployment.'}
];

const Licensing=()=>(
  <div className="di-site">
    <Header/>
    <main className="di-page">
      <section className="di-page-hero">
        <div className="di-container">
          <span className="di-eyebrow">SOFTWARE LICENSING & ACQUISITIONS</span>
          <h1>A smarter starting point for your next software product.</h1>
          <p>Explore commercial options for eligible ready-built applications, white-label software and selected technology assets. We start with your requirements and share available products through a qualified inquiry.</p>
          <div className="di-page-hero-actions">
            <a className="di-button di-button--primary" href="mailto:developiq01@gmail.com?subject=Software%20Licensing%20Inquiry">Request software availability <span className="di-arrow" aria-hidden="true">↗</span></a>
            <Link className="di-button di-button--outline" to="/Portfolio">View selected work <span className="di-arrow" aria-hidden="true">↗</span></Link>
          </div>
        </div>
      </section>
      <section className="di-section">
        <div className="di-container">
          <div className="di-section-intro"><span className="di-eyebrow">COMMERCIAL PATHWAYS</span><h2>Different needs. Different ways forward.</h2><p>From using existing technology to acquiring a transferable software asset, we'll work through a commercial structure that fits the situation.</p></div>
          <div className="di-cards">
            {options.map(p=><article className="di-card" key={p.num}><span className="di-card-icon" aria-hidden="true">{p.icon}</span><span className="di-card-counter">{p.num}</span><h3>{p.title}</h3><p>{p.text}</p></article>)}
          </div>
        </div>
      </section>
      <section className="di-section di-section--muted">
        <div className="di-container">
          <div className="di-section-intro"><span className="di-eyebrow">HOW IT WORKS</span><h2>Clarity before commitment.</h2><p>We only advertise software for licensing after commercial rights have been checked.</p></div>
          <div className="di-steps">
            <div className="di-step"><span className="di-step-number">01 / TELL US WHAT YOU NEED</span><h3>Define your use case</h3><p>Share your market, core features, deployment plans and preferred transaction structure.</p></div>
            <div className="di-step"><span className="di-step-number">02 / REVIEW YOUR OPTIONS</span><h3>Discuss eligible assets</h3><p>We'll confirm whether a suitable company-owned product is available and discuss any demonstration or technical review.</p></div>
            <div className="di-step"><span className="di-step-number">03 / AGREE THE DETAILS</span><h3>License or transfer</h3><p>Settle rights, pricing, support, third-party dependencies and handover arrangements in writing.</p></div>
          </div>
          <p className="di-note">Confidential client projects are not automatically for sale. All licensing and acquisitions depend on verified ownership, suitable permissions and written terms.</p>
        </div>
      </section>
      <section className="di-cta-wrap" style={{paddingTop:90}}>
        <div className="di-container"><div className="di-cta">
          <div><span className="di-eyebrow di-eyebrow--light">EXPLORE THE POSSIBILITIES</span><h2>Tell us what you're looking to launch.</h2><p>We'll confirm relevant options without presenting an unverified product as available.</p></div>
          <a className="di-button di-button--white" href="mailto:developiq01@gmail.com?subject=Software%20Asset%20Inquiry">Send an inquiry <span className="di-arrow" aria-hidden="true">↗</span></a>
        </div></div>
      </section>
    </main>
    <Footer/>
  </div>
);
export default Licensing;
