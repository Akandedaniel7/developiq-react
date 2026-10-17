import React from 'react';
import Header from '../../Components/Header/Navbar';
import Footer from '../../Components/Footer/Footer';
import '../../Styles/premium.css';

const Contact=()=>(
  <div className="di-site">
    <Header/>
    <main className="di-page">
      <section className="di-page-hero">
        <div className="di-container">
          <span className="di-eyebrow">GET IN TOUCH</span>
          <h1>Let's talk about what's next.</h1>
          <p>Whether you're planning a new digital product, exploring software licensing or interested in a technical partnership, we'd like to hear what you're working on.</p>
          <a className="di-button di-button--primary" href="mailto:developiq01@gmail.com?subject=Develop-IQ%20Business%20Inquiry">Email our team <span className="di-arrow" aria-hidden="true">↗</span></a>
        </div>
      </section>
      <section className="di-section">
        <div className="di-container">
          <div className="di-section-intro"><span className="di-eyebrow">HOW TO REACH US</span><h2>Start with a conversation.</h2><p>Share a brief overview of your requirements. We can then discuss the appropriate next step.</p></div>
          <div className="di-contact-methods">
            <article className="di-contact-card">
              <span className="di-eyebrow">GENERAL INQUIRIES</span><h3>Software development</h3><p>Tell us about your product idea, existing system or engineering needs.</p>
              <a href="mailto:developiq01@gmail.com?subject=Development%20Inquiry">developiq01@gmail.com ↗</a>
            </article>
            <article className="di-contact-card">
              <span className="di-eyebrow">COMMERCIAL & RESEARCH</span><h3>Licensing and partnerships</h3><p>Get in touch about white-label products, asset acquisitions or responsible technical collaboration.</p>
              <a href="mailto:developiq01@gmail.com?subject=Licensing%20and%20Partnership%20Inquiry">Send a partnership inquiry ↗</a>
            </article>
          </div>
        </div>
      </section>
    </main>
    <Footer/>
  </div>
);
export default Contact;
