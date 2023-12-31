import React from 'react';
// import { link } from 'react-router-dom';
import '../../Components/General.css';
import './home.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'boxicons/css/boxicons.min.css';
import heroimg from '../../asstes/images/hero-img.png';

const Hero = () => {
  return (
    <div>
    <section id="hero" className="d-flex align-items-center">

    <div className="container">
      <div className="row">
        <div className="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
          <h1 data-aos="fade-up">A Software company that's light-years ahead</h1>
          <h2 data-aos="fade-up" data-aos-delay="400">We build Web, Desktop and Mobile Applications for startups and SMEs </h2>
          <div data-aos="fade-up" data-aos-delay="800">
            <a href="#about" className="btn-get-started scrollto">Get Started</a>
            <link to ></link>
          </div>
        </div>
        <div className="col-lg-6 order-1 order-lg-2 hero-img" data-aos="fade-left" data-aos-delay="200">
          <img src={heroimg} className="img-fluid animated" alt="Hero" />
        </div>
      </div>
    </div>

   

  </section>
    </div>
  )
}

export default Hero;
