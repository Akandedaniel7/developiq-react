import React from 'react';
import { Link } from 'react-router-dom';

const WebCategories = () => {
  return (
    <div>
    <section id="services" className="services">
    <div className="container">

      <div className="section-title" data-aos="fade-up">
        <h2>Web Development</h2>
        <p>We work with you to achieve your goals.</p>
      </div>

      <div className="row">
        <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
          <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
            <div className="icon"><i class="bx bxl-dribbble"></i></div>
            <h4 className="title"><Link to="/WebDesign">Web Design</Link></h4>
            <p className="description">DevelopIQ provides cutting-edge web design solutions to create beautiful websites.</p>
          </div>
        </div>

        <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
          <div className="icon-box" data-aos="fade-up" data-aos-delay="200">
            <div className="icon"><i class="bx bx-file"></i></div>
            <h4 className="title"><Link to="/Ecommerce">E-commerce Website</Link></h4>
            <p className="description">Developing E-Commerce Solutions to Unlock the Potential of Online Retail.</p>
          </div>
        </div>

        <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
          <div className="icon-box" data-aos="fade-up" data-aos-delay="400">
            <div className="icon"><i class="bx bx-world"></i></div>
            <h4 className="title"><Link to="/Education">Education Website</Link></h4>
            <p className="description">Increasing Education's Future Potential DevelopIQ's ground-breaking software solutions Revolutionize Learning!</p>
          </div>
        </div>

        <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
          <div className="icon-box" data-aos="fade-up" data-aos-delay="400">
            <div className="icon"><i class="bx bx-world"></i></div>
            <h4 className="title"><Link to="/Entertainment">Entertainmet Website</Link></h4>
            <p className="description">Immersive software from DevelopIQ provides immersive entertainment for lifelong fun.</p>
          </div>
        </div>

        <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
          <div className="icon-box" data-aos="fade-up" data-aos-delay="400">
            <div className="icon"><i class="bx bx-world"></i></div>
            <h4 className="title"><Link to="/SocialAndDating">Social and Dating Website</Link></h4>
            <p className="description">DevelopIQ Releases Next-Level Social and Dating Software Solutions to Help You Connect, Interact, and Find Love!</p>
          </div>
        </div>

        <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
          <div className="icon-box" data-aos="fade-up" data-aos-delay="400">
            <div className="icon"><i class="bx bx-world"></i></div>
            <h4 className="title"><Link to="/custom">Custom Website</Link></h4>
            <p className="description">Building a Custom Digital Identity DevelopIQ Releases Brand-Calibrated Custom Website Solutions!</p>
          </div>
        </div>

      </div>

    </div>
  </section>
    </div>
  )
}

export default WebCategories
