import React from 'react';
import Header from '../../Components/Header/Navbar';
import Footer from '../../Components/Footer/Footer';
import '../Home/commercial.css';

const categories = [
  {
    number: '01 / ENGINEERING',
    title: 'Software development collaboration',
    description: 'Engineering delivery, product development and integration work with businesses building or expanding technology products.'
  },
  {
    number: '02 / CODE & DOCUMENTATION',
    title: 'Eligible proprietary assets',
    description: 'Exploratory licensing discussions covering company-owned repositories, technical documentation and development histories where rights and provenance can be verified.'
  },
  {
    number: '03 / AI EVALUATION',
    title: 'Agent training and evaluation',
    description: 'Scoping conversations about realistic software workflows and test environments for AI evaluation, where requirements, permissions and commercial terms align.'
  }
];

const Partnerships = () => (
  <>
    <Header />
    <main className="commercial-page">
      <section className="commercial-page-hero">
        <div className="container">
          <span className="commercial-eyebrow">ENGINEERING & AI PARTNERSHIPS</span>
          <h1>Technical collaboration built on real engineering work.</h1>
          <p>We partner with technology companies and research teams to explore software engineering services, permitted asset licensing and clearly scoped AI evaluation opportunities.</p>
          <a className="commercial-primary-btn" href="mailto:developiq01@gmail.com?subject=Engineering%20and%20AI%20Partnership%20Inquiry">Discuss a partnership →</a>
        </div>
      </section>

      <section className="commercial-page-section">
        <div className="container">
          <span className="commercial-eyebrow">WAYS TO WORK WITH US</span>
          <h2>From software execution to technical assets.</h2>
          <p className="section-intro">Develop-IQ is a six-person software development team based in Nigeria. Partnership eligibility, technical scope and materials available for review are confirmed directly with each prospective partner.</p>
          <div className="commercial-detail-grid">
            {categories.map((category) => (
              <article className="commercial-detail-card" key={category.number}>
                <span className="number">{category.number}</span>
                <h3>{category.title}</h3>
                <p>{category.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="commercial-page-section alt">
        <div className="container">
          <span className="commercial-eyebrow">SAFE BY DESIGN</span>
          <h2>Controlled disclosure. Clear rights.</h2>
          <p className="section-intro">We begin with a non-confidential description of potential assets and the intended use. Detailed samples, repository access or engineering records are only considered after suitable confidentiality, security, ownership and licensing checks.</p>
          <div className="commercial-steps">
            <div className="commercial-step"><strong>STEP 01</strong><h3>Initial fit assessment</h3><p>Discuss the requested assets, the use case and basic eligibility criteria.</p></div>
            <div className="commercial-step"><strong>STEP 02</strong><h3>Rights and scope review</h3><p>Check code provenance, client obligations, applicable third-party licenses and proposed usage rights.</p></div>
            <div className="commercial-step"><strong>STEP 03</strong><h3>Agreed collaboration</h3><p>Proceed only under written terms that define access, permitted use, compensation and responsibilities.</p></div>
          </div>
        </div>
      </section>

      <section className="commercial-page-section">
        <div className="container">
          <div className="commercial-cta">
            <div>
              <h2>Explore a partnership with Develop-IQ.</h2>
              <p>Tell us what your team is building or evaluating. We can start with a high-level, non-confidential discussion.</p>
            </div>
            <a className="commercial-primary-btn" href="mailto:developiq01@gmail.com?subject=Technology%20Partnership%20Inquiry">Contact our team →</a>
          </div>
          <p className="commercial-small-print">No client-owned source code, private repositories, personal data or other protected records are made available without appropriate rights and an agreed process.</p>
        </div>
      </section>
    </main>
    <Footer />
  </>
);

export default Partnerships;
