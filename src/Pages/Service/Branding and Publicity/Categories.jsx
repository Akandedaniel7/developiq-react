import React from 'react';
import { Link } from 'react-router-dom';

const Categories = () => {
  return (
    <div>
    <section id="services" className="services">
    <div className="container">

      <div className="section-title" data-aos="fade-up">
        <h2>Branding and Publicity</h2>
        <p>We work with you to achieve your goals.</p>
      </div>

      <div className="row">
        <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
          <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
            <div className="icon"><i class="bx bxl-dribbble"></i></div>
            <h4 className="title"><Link to="/LogoandIdentity">Logo & Identity</Link></h4>
            <p className="description">DevelopIQ provides distinctive logo and identity solutions to capture brand essence.</p>
          </div>
        </div>

        <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
          <div className="icon-box" data-aos="fade-up" data-aos-delay="200">
            <div className="icon"><i class="bx bx-file"></i></div>
            <h4 className="title"><Link to="/UserInterface">User Interface</Link></h4>
            <p className="description">DevelopIQ's intuitive user interfaces enhance user experiences.</p>
          </div>
        </div>

        <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
          <div className="icon-box" data-aos="fade-up" data-aos-delay="300">
            <div className="icon"><i class="bx bx-tachometer"></i></div>
            <h4 className="title"><Link to="/Publication">Publication</Link></h4>
            <p className="description">DevelopIQ provides software solutions for publishing interesting and influential publications.</p>
          </div>
        </div>

      </div>

    </div>
  </section>
    </div>
  )
}

export default Categories
