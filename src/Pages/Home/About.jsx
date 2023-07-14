import React from 'react';
import './home.css';
import '../../Components/General.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'boxicons/css/boxicons.min.css';

const About = () => {
  return (
    <div>
    <section id="about" className="about">
    <div className="container">

      <div className="section-title" data-aos="fade-up">
        <h2>About Us</h2>
      </div>

      <div className="row content">
        <div className="col-lg-6" data-aos="fade-up" data-aos-delay="150">
          <p>
            DevelopIQ is a software company specializing in web, desktop, and mobile development.
          </p>
          <ul>
            <li><i className="ri-check-double-line"></i> We maintain close communication for the entire project.</li>
            <li><i className="ri-check-double-line"></i> We’re straightforward and honest.</li>
            <li><i className="ri-check-double-line"></i> Simple and well-defined timeline and deliverables. </li>
            <li><i className="ri-check-double-line"></i>We write code by hand for fast, secure, reliable, and accessible websites.</li>
          </ul>
        </div>
        <div className="col-lg-6 pt-4 pt-lg-0" data-aos="fade-up" data-aos-delay="300">
          <p>
            DevelopIQ is a leading software company specializing in the development of high-quality websites, Desktop and mobile applications.
         Our team of experienced developers, designers, and strategists are dedicated to providing cutting-edge software solutions 
        tailored to our clients' unique needs.
          </p>
          <a href="/about.html" className="btn-learn-more">Learn More</a>
        </div>
      </div>

    </div>
  </section>
    </div>
  )
}

export default About
