import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../Components/Header/Navbar';
import Footer from '../../Components/Footer/Footer';
import '../../Styles/premium.css';

const services=[
  {icon:'▣',num:'01 / WEB',title:'Web applications',text:'Responsive websites, business platforms, admin dashboards and user-facing web products.',to:'/WebDevelopment'},
  {icon:'◇',num:'02 / MOBILE',title:'Mobile applications',text:'Purpose-built mobile app experiences for products, services and business processes.',to:'/MobileApplication'},
  {icon:'↗',num:'03 / PRODUCT',title:'Product design and UX',text:'Intuitive user journeys, interface direction and product thinking to shape the right experience.',to:'/WebDesign'},
  {icon:'⊞',num:'04 / COMMERCE',title:'E-commerce experiences',text:'Digital storefronts and purchasing flows for brands selling products and services.',to:'/Ecommerce'},
  {icon:'⌘',num:'05 / BUSINESS',title:'Custom business systems',text:'Internal tools and operational software built around business requirements.',to:'/custom'},
  {icon:'✳',num:'06 / IDENTITY',title:'Brand and digital presence',text:'Identity and presentation support that helps businesses show up with clarity.',to:'/BrandingandPublicity'}
];
const Service=()=>(
  <div className="di-site">
    <Header/>
    <main className="di-page">
      <section className="di-page-hero">
        <div className="di-container">
          <span className="di-eyebrow">WHAT WE BUILD</span><h1>Thoughtful digital products, built around your business.</h1>
          <p>From customer experiences to operational software, Develop-IQ designs and develops solutions that align with how your business works.</p>
          <Link className="di-button di-button--primary" to="/Contact">Discuss your project <span className="di-arrow" aria-hidden="true">↗</span></Link>
        </div>
      </section>
      <section className="di-section">
        <div className="di-container">
          <div className="di-section-intro"><span className="di-eyebrow">CAPABILITIES</span><h2>From idea to implementation.</h2><p>Choose a service to explore, or get in touch with the team for a cross-functional development requirement.</p></div>
          <div className="di-cards">
            {services.map(s=><article key={s.num} className="di-card">
              <span className="di-card-icon" aria-hidden="true">{s.icon}</span>
              <span className="di-card-counter">{s.num}</span><h3>{s.title}</h3><p>{s.text}</p>
              <Link to={s.to}>Learn more <span className="di-arrow" aria-hidden="true">↗</span></Link>
            </article>)}
          </div>
        </div>
      </section>
      <section className="di-cta-wrap">
        <div className="di-container"><div className="di-cta">
          <div><span className="di-eyebrow di-eyebrow--light">YOUR PRODUCT, OUR FOCUS</span><h2>Tell us the challenge. We'll discuss the path.</h2><p>Start with the business need, not a list of features.</p></div>
          <Link className="di-button di-button--white" to="/Contact">Start a conversation <span className="di-arrow" aria-hidden="true">↗</span></Link>
        </div></div>
      </section>
    </main>
    <Footer/>
  </div>
);
export default Service;
