import React from 'react';
import { Link } from 'react-router-dom';
import '../service.css';

const Categories = () => {
  return (
    <div>
    <section id="services" class="services">
    <div className="container">

      <div className="section-title" data-aos="fade-up">
        <h2>Mobile Application Development</h2>
        <p>We work with you to achieve your goals.</p>
      </div>

      <div className="row">
        <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
          <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
            <div className="icon"><i class="bx bxl-dribbble"></i></div>
            <h4 className="title"><Link to="/MobileApp">Mobile Apps</Link></h4>
            <p className="description">DevelopIQ creates mobile apps to transform businesses and engage users.</p>
          </div>
        </div>

        <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
          <div className="icon-box" data-aos="fade-up" data-aos-delay="200">
            <div className="icon"><i class="bx bx-file"></i></div>
            <h4 className="title"><Link to="/EcommerceApp">E-commerce App</Link></h4>
            <p className="description">Increasing Your Online Business DevelopIQ provides cutting-edge e-commerce app solutions to merchants!
            </p>
          </div>
        </div>

        <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
          <div className="icon-box" data-aos="fade-up" data-aos-delay="300">
            <div class="icon"><i class="bx bx-tachometer"></i></div>
            <h4 className="title"><Link to="/BusinessApp">Business App</Link></h4>
            <p className="description">DevelopIQ enables simplified operations and growth to empower success in the digital age.</p>
          </div>
        </div>

        <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
          <div className="icon-box" data-aos="fade-up" data-aos-delay="400">
            <div className="icon"><i class="bx bx-world"></i></div>
            <h4 className="title"><Link to="/EducationalApp">Education App</Link></h4>
            <p className="description">DevelopIQ transforms education with creative and compelling app solutions.</p>
          </div>
        </div>

        <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
          <div className="icon-box" data-aos="fade-up" data-aos-delay="400">
            <div className="icon"><i class="bx bx-world"></i></div>
            <h4 className="title"><Link to="/EntertainmentApp">EntertainmetApp</Link></h4>
            <p className="description">DevelopIQ provides immersive app experiences for entertainment.</p>
          </div>
        </div>

      </div>

    </div>
  </section>
    </div>
  )
}

export default Categories
