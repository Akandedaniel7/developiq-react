import React from 'react';
import '../../Components/General.css';
import './about.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'boxicons/css/boxicons.min.css';

const Sections = () => {
  return (
    <div>
    <section id="services" className="services">
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
          <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
            <div className="icon"><i className="bx bxl-dribbble"></i></div>
            <h4 className="title"><a href="/about/blog.html">Blog</a></h4>
            <p className="description">The realm of software solutions is explored in Code Chronicles.</p>
          </div>
        </div>

        <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
          <div className="icon-box" data-aos="fade-up" data-aos-delay="200">
            <div className="icon"><i className="bx bx-file"></i></div>
            <h4 className="title"><a href="/about/news.html">News</a></h4>
            <p className="description">DevelopIQ offers news and business updates from the cutting edge of technology.</p>
          </div>
        </div>

        <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
          <div className="icon-box" data-aos="fade-up" data-aos-delay="300">
            <div className="icon"><i className="bx bx-tachometer"></i></div>
            <h4 className="title"><a href="/about/faq.html">FAQ</a></h4>
            <p className="description">Stay up-to-date with industry news and innovations from DevelopIQ News.</p>
          </div>
        </div>

        <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
          <div className="icon-box" data-aos="fade-up" data-aos-delay="400">
            <div className="icon"><i className="bx bx-world"></i></div>
            <h4 className="title"><a href="/about/carrer.html">Carrer</a></h4>
            <p className="description">Join the DevelopIQ Team to shape the future of software development.</p>
          </div>
        </div>

      </div>

    </div>
  </section>
    </div>
  )
}

export default Sections;
