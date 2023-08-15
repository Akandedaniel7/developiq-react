import React from 'react';
import Header from '../../Components/Header/Navbar';
import { Link } from 'react-router-dom'
import './about.css';
import Footer from '../../Components/Footer/Footer';

const FAQ = () => {
  return (
    <div>
    <Header />
    <div class="breadcrumbs-1 d-flex align-items-center">
    <div class="container position-relative d-flex flex-column align-items-center" data-aos="fade">

      <h2>FAQ</h2>
      <ol>
        <li><Link to='/About'>About</Link></li>
        <li>FAQ</li>
      </ol>

    </div>
  </div>{ /* End Breadcrumbs */ }

  <main id="main">
     { /* ======= F.A.Q Section ======= */ }
     <section id="faq" className="faq">
        <div class="container">
  
          <div className="section-title" data-aos="fade-up">
            <h2>Frequently Asked Questions</h2>
          </div>
  
          <div className="row faq-item d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100">
            <div className="col-lg-5">
              <i class="ri-question-line"></i>
              <h4>What types of services does DevelopIQ offer?</h4>
            </div>
            <div className="col-lg-7">
              <p>
                DevelopIQ provides digital solutions including website, desktop and mobile application
                development for businesses and individuals.
              </p>
            </div>
          </div>{ /* End F.A.Q Item*/ }
  
          <div className="row faq-item d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="200">
            <div className="col-lg-5">
              <i class="ri-question-line"></i>
              <h4>What are the perks of working with DevelopIQ?</h4>
            </div>
            <div className="col-lg-7">
              <p>
                DevelopIQ focuses on teamwork, responsibility, result-driven development, self-education, and quality assurance.
              </p>
            </div>
          </div>{ /* End F.A.Q Item*/ }
  
          <div className="row faq-item d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="300">
            <div className="col-lg-5">
              <i class="ri-question-line"></i>
              <h4>How can DevelopIQ help in creating a website?</h4>
            </div>
            <div className="col-lg-7">
              <p>
                DevelopIQ creates visually appealing and functional websites with modern web design principles.
              </p>
            </div>

          </div>{ /* End F.A.Q Item*/ }
          <div className="row faq-item d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="300">
            <div className="col-lg-5">
              <i class="ri-question-line"></i>
              <h4>Can DevelopIQ provide ongoing support and maintenance?</h4>
            </div>
            <div className="col-lg-7">
              <p>
                DevelopIQ provides reliable support and maintenance services to ensure secure, optimized performance.
              </p>
            </div>

          </div>{ /* End F.A.Q Item*/ }
          <div className="row faq-item d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="300">
            <div className="col-lg-5">
              <i class="ri-question-line"></i>
              <h4>How can DevelopIQ help in creating a website?</h4>
            </div>
            <div className="col-lg-7">
              <p>
                DevelopIQ creates visually appealing and functional websites with modern web design principles.
              </p>
            </div>
          </div>{ /* End F.A.Q Item*/ }
  
          <div className="row faq-item d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="400">
            <div className="col-lg-5">
              <i class="ri-question-line"></i>
              <h4> How can I get started with DevelopIQ's services?</h4>
            </div>
            <div className="col-lg-7">
              <p>
                DevelopIQ follows a comprehensive development process to ensure successful project delivery.
              </p>
            </div>
          </div>{ /* End F.A.Q Item*/ }
  
          <div className="row faq-item d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="500">
            <div className="col-lg-5">
              <i class="ri-question-line"></i>
              <h4>How long does it take it to start my product development?</h4>
            </div>
            <div className="col-lg-7">
              <p>
                Reach out to DevelopIQ to discuss project requirements, consult, and guide.
              </p>
            </div>
          </div>{ /* End F.A.Q Item*/ }
  
        </div>
      </section>{ /* End F.A.Q Section */ }
  </main> { /* */ }
      <Footer />
    </div>
  )
}

export default FAQ
