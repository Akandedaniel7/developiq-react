import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';
import '../../Components/General.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'boxicons/css/boxicons.min.css';

const Service = () => {
  return (
    <div>
    <section id="services" className="services">
    <div className="container">

      <div className="section-title" data-aos="fade-up">
        <h2>Services</h2>
        <p>We work with you to achieve your goals.</p>
      </div>

      <div className="row">
        <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
          <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
            <div className="icon"><i className="bx bxl-dribbble"></i></div>
            <h4 className="title"><Link to="/WebDevelopment">Web Development</Link></h4>
            <p className="description">Improve User Experience by Speeding Up Your Website with Web Performance Optimization</p>
          </div>
        </div>

        <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
          <div className="icon-box" data-aos="fade-up" data-aos-delay="200">
            <div className="icon"><i className="bx bx-file"></i></div>
            <h4 className="title"><Link to="/MobileApplication">Mobile Application Development</Link></h4>
            <p className="description">Exploring mobile app development potential through design and experience.</p>
          </div>
        </div>

        <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
          <div className="icon-box" data-aos="fade-up" data-aos-delay="300">
            <div className="icon"><i className="bx bx-tachometer"></i></div>
            <h4 className="title"><Link to="/BrandingandPublicity">Branding and Publicity</Link></h4>
            <p className="description">Maximize brand visibility through digital marketing channels.</p>
          </div>
        </div>

        <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
          <div className="icon-box" data-aos="fade-up" data-aos-delay="400">
            <div className="icon"><i className="bx bx-world"></i></div>
            <h4 className="title"><a href="/">Maintenance</a></h4>
            <p className="description">Take your business to the next level with Logo & Identity services from DevelopIQ Technologies.</p>
          </div>
        </div>

      </div>

    </div>
  </section>
    </div>
  )
}

export default Service
