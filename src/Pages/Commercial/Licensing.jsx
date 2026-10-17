import React from 'react';
import Header from '../../Components/Header/Navbar';
import Footer from '../../Components/Footer/Footer';
import '../Home/commercial.css';

const offers = [
  {
    number: '01 / LICENSE',
    title: 'White-label software',
    description: 'License an eligible ready-built solution for use under your own brand. Scope, deployment rights, support and any permitted resale are defined in the agreement.'
  },
  {
    number: '02 / TRANSFER',
    title: 'Software asset acquisition',
    description: 'Discuss the acquisition of selected software assets, including source code and documented transferable rights, where ownership and product availability have been verified.'
  },
  {
    number: '03 / DELIVER',
    title: 'Deployment and customization',
    description: 'Arrange implementation, hosting setup, integrations or feature changes with our engineering team as a separate, agreed engagement.'
  }
];

const Licensing = () => (
  <>
    <Header />
    <main className="commercial-page">
      <section className="commercial-page-hero">
        <div className="container">
          <span className="commercial-eyebrow">SOFTWARE ASSETS & LICENSING</span>
          <h1>Buy the head start. Build what comes next.</h1>
          <p>Develop-IQ works with agencies, entrepreneurs and companies exploring ready-built technology, white-label licensing and full software acquisitions. Available assets are shared through a qualified inquiry process.</p>
          <a className="commercial-primary-btn" href="mailto:developiq01@gmail.com?subject=Software%20Licensing%20Inquiry">Request available software →</a>
        </div>
      </section>

      <section className="commercial-page-section">
        <div className="container">
          <span className="commercial-eyebrow">COMMERCIAL OPTIONS</span>
          <h2>A flexible path to software ownership or use.</h2>
          <p className="section-intro">Every product and deal is assessed individually. We do not list client-owned systems as saleable assets, and a demo is not a promise of resale rights.</p>
          <div className="commercial-detail-grid">
            {offers.map((offer) => (
              <article className="commercial-detail-card" key={offer.number}>
                <span className="number">{offer.number}</span>
                <h3>{offer.title}</h3>
                <p>{offer.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="commercial-page-section alt">
        <div className="container">
          <span className="commercial-eyebrow">OUR PROCESS</span>
          <h2>From inquiry to a confident handover.</h2>
          <div className="commercial-steps">
            <div className="commercial-step"><strong>STEP 01</strong><h3>Define the requirement</h3><p>Tell us your industry, target users, deployment plans and whether you prefer a license or acquisition.</p></div>
            <div className="commercial-step"><strong>STEP 02</strong><h3>Review eligible assets</h3><p>We share suitable product summaries and demonstrations after checking availability and licensing rights.</p></div>
            <div className="commercial-step"><strong>STEP 03</strong><h3>Agree the transaction</h3><p>Finalize scope, due diligence, pricing, support and any source-code or intellectual-property transfer.</p></div>
          </div>
        </div>
      </section>

      <section className="commercial-page-section">
        <div className="container">
          <div className="commercial-cta">
            <div>
              <h2>Looking for a software product you can launch?</h2>
              <p>Tell us what you need. We will confirm whether an independently owned asset is available or propose a separate development engagement.</p>
            </div>
            <a className="commercial-primary-btn" href="mailto:developiq01@gmail.com?subject=Software%20Asset%20Inquiry">Start an inquiry →</a>
          </div>
          <p className="commercial-small-print">Any licensing or sale is subject to written terms, verification of ownership, third-party licenses and applicable confidentiality and data-protection obligations.</p>
        </div>
      </section>
    </main>
    <Footer />
  </>
);

export default Licensing;
