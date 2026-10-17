import React from 'react';
import Header from '../../Components/Header/Navbar';
import Footer from '../../Components/Footer/Footer';
import '../../Styles/premium.css';

const types=[
  {icon:'◇',num:'01 / DELIVERY',title:'Engineering collaboration',text:'Product development, technical implementation and integrations for organizations building digital tools and services.'},
  {icon:'▣',num:'02 / ASSET LICENSING',title:'Eligible engineering assets',text:'Structured discussions about permitted, company-owned codebases, technical documentation and development histories after rights verification.'},
  {icon:'↗',num:'03 / AI & EVALUATION',title:'AI research and evaluation',text:'Potential collaboration on software workflows or controlled test environments, where access, consent and commercial use are appropriately agreed.'}
];

const Partnerships=()=>(
  <div className="di-site">
    <Header/>
    <main className="di-page">
      <section className="di-page-hero">
        <div className="di-container">
          <span className="di-eyebrow">ENGINEERING & TECHNOLOGY PARTNERSHIPS</span>
          <h1>Meaningful collaboration starts with shared clarity.</h1>
          <p>Develop-IQ works with technology teams and prospective research partners on software engineering, eligible technology assets and carefully scoped AI-related collaborations.</p>
          <a className="di-button di-button--primary" href="mailto:developiq01@gmail.com?subject=Technology%20Partnership%20Inquiry">Discuss a partnership <span className="di-arrow" aria-hidden="true">↗</span></a>
        </div>
      </section>
      <section className="di-section">
        <div className="di-container">
          <div className="di-section-intro"><span className="di-eyebrow">COLLABORATION MODELS</span><h2>Engineering work. New possibilities.</h2><p>We evaluate each opportunity based on relevance, available resources, clear ownership and the needs of the partner.</p></div>
          <div className="di-cards">
            {types.map(p=><article className="di-card" key={p.num}><span className="di-card-icon" aria-hidden="true">{p.icon}</span><span className="di-card-counter">{p.num}</span><h3>{p.title}</h3><p>{p.text}</p></article>)}
          </div>
        </div>
      </section>
      <section className="di-section di-section--muted">
        <div className="di-container di-split">
          <div>
            <span className="di-eyebrow">RESPONSIBLE BY DESIGN</span>
            <h2>A clear approach to data and rights.</h2>
            <p>We begin with non-confidential asset descriptions and a discussion of the use case. We do not share private source code, customer information or internal records without appropriate permissions and contractual safeguards.</p>
            <ul className="di-simple-list">
              <li>Provenance and ownership review</li>
              <li>Defined permitted uses and confidentiality terms</li>
              <li>Controlled technical review when appropriate</li>
            </ul>
          </div>
          <div className="di-panel-visual" aria-hidden="true">
            <div className="di-panel-top">PROVENANCE / PERMISSIONS / SCOPE</div>
            <div className="di-panel-code">
              <div><strong>01.</strong> Establish eligibility</div>
              <div><strong>02.</strong> Review permitted rights</div>
              <div><strong>03.</strong> Agree scope and use</div>
              <div><strong>04.</strong> Collaborate responsibly</div>
            </div>
          </div>
        </div>
      </section>
      <section className="di-cta-wrap" style={{paddingTop:90}}>
        <div className="di-container"><div className="di-cta">
          <div><span className="di-eyebrow di-eyebrow--light">PARTNER WITH DEVELOP-IQ</span><h2>Let's explore the fit.</h2><p>Start with a short note about the use case and the kind of technical collaboration you have in mind.</p></div>
          <a className="di-button di-button--white" href="mailto:developiq01@gmail.com?subject=Engineering%20Partnership%20Inquiry">Get in touch <span className="di-arrow" aria-hidden="true">↗</span></a>
        </div></div>
      </section>
    </main>
    <Footer/>
  </div>
);
export default Partnerships;
