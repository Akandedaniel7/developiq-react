import React from 'react';
import '../../Components/General.css';
import './about.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'boxicons/css/boxicons.min.css';

const Details = () => {
  return (
    <div>
    <section id="about" class="about">
    <div class="container">

      <div class="section-title" data-aos="fade-up">
        <h2>About</h2>
        <p>We work with you to achieve your goals.</p>
      </div>

      <div class="row content">
        <div class="col-lg-6" data-aos="fade-up" data-aos-delay="150">
          <p>
            DevelopIQ is a software company specializing in web, desktop, and mobile development.
          </p>
          <ul>
            <li><i class="ri-check-double-line"></i> We maintain close communication for the entire project.</li>
            <li><i class="ri-check-double-line"></i> We’re straightforward and honest.</li>
            <li><i class="ri-check-double-line"></i> Simple and well-defined timeline and deliverables. </li>
            <li><i class="ri-check-double-line"></i>We write code by hand for fast, secure, reliable, and accessible websites.</li>
          </ul>
        </div>
        <div class="col-lg-6 pt-4 pt-lg-0" data-aos="fade-up" data-aos-delay="300">
          <p>
            DevelopIQ is a leading software company specializing in the development of high-quality websites, Desktop and mobile applications.
           Our team of experienced developers, designers, and strategists are dedicated to providing cutting-edge software solutions 
          tailored to our clients' unique needs. </p>
          
          <p>We specialize in developing customized mobile applications for iOS and Android platforms.
          We prioritize customer satisfaction and work closely with our clients throughout the development process to ensure their unique
          requirements are met and exceeded. We strive to transform ideas into reality and propel businesses to new heights with our expertise
         in website and mobile application development.
          </p>
          
        </div>
      </div>

    </div>
  </section>
    </div>
  )
}

export default Details
