import React from 'react';
import { Link } from 'react-router-dom';
import './commercial.css';

const offers = [
  {
    number: '01',
    label: 'White-label licensing',
    title: 'Launch under your brand',
    description: 'Explore independently owned software that can be branded and deployed for your business, subject to product availability and agreed licensing terms.',
    link: '/SoftwareLicensing',
    action: 'Explore licensing'
  },
  {
    number: '02',
    label: 'Software asset acquisition',
    title: 'Acquire technology, not a backlog',
    description: 'Discuss selected software assets that may be available for a complete transfer of defined source-code and intellectual-property rights.',
    link: '/SoftwareLicensing',
    action: 'Discuss acquisition'
  },
  {
    number: '03',
    label: 'Engineering partnerships',
    title: 'Explore technical collaboration',
    description: 'Work with us on software engineering, permitted codebase licensing, and AI training or evaluation partnerships where rights and use cases align.',
    link: '/TechnologyPartnerships',
    action: 'Explore partnerships'
  }
];

const Commercial = () => (
  <section className="commercial-overview" aria-labelledby="commercial-heading">
    <div className="container">
      <div className="commercial-section-heading">
        <span className="commercial-eyebrow">BEYOND CUSTOM DEVELOPMENT</span>
        <h2 id="commercial-heading">More ways to build, launch and grow.</h2>
        <p>Alongside client development, Develop-IQ explores licensing and acquisition opportunities for eligible company-owned software assets.</p>
      </div>
      <div className="commercial-offer-grid">
        {offers.map((offer) => (
          <article className="commercial-offer-card" key={offer.number}>
            <div className="commercial-card-top"><span>{offer.label}</span><strong>{offer.number}</strong></div>
            <h3>{offer.title}</h3>
            <p>{offer.description}</p>
            <Link to={offer.link}>{offer.action} <span aria-hidden="true">↗</span></Link>
          </article>
        ))}
      </div>
      <div className="commercial-assurance">
        <span className="commercial-assurance-dot" aria-hidden="true" />
        <p>Client-owned software and confidential engineering materials are not offered for resale or disclosure without the appropriate rights and permissions.</p>
      </div>
    </div>
  </section>
);

export default Commercial;
