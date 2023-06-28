import React from 'react';
import '../../Components/General.css';
import './home.css'

const Testimonial = () => {
  return (
    <div>
    <section id="testimonials" className="testimonials section-bg">
    <div className="container">

      <div className="section-title" data-aos="fade-up">
        <h2>Testimonials</h2>
        <p>What peolple say about DevelopIQ</p>
      </div>

      <div className="testimonials-slider swiper" data-aos="fade-up" data-aos-delay="100">
        <div className="swiper-wrapper">

          <div className="swiper-slide">
            <div className="testimonial-wrap">
              <div className="testimonial-item">
                <img src="assets/img/arcadestructures.jpg" className="testimonial-img" alt="" />
                <h3>ArcadeStuctures</h3>
                <h4>Ceo &amp; Founder</h4>
                <p>
                  <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                 DevelopIQ contributed to our company's growth by helping us design an excellent website,
                 the project management team was responsive and well-organised, They were very
                 dedicated to our project any they deliverd within our timeline
                  <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
              </div>
            </div>
          </div>

          <div className="swiper-slide">
            <div className="testimonial-wrap">
              <div className="testimonial-item">
                <img src="assets/img/milesstone.jpg" className="testimonial-img" alt="" />
                <h3>MilesStone</h3>
                <h4>Architect</h4>
                <p>
                  <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                  They are Smart, Intelligent, and Vibrant when it comes to IT solutions. I recommend
                  the company for any IT needs. My experience with the company was superb just like the name, they are 
                  to smart!!!
                  <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
              </div>
            </div>
          </div>

        </div>
        <div className="swiper-pagination"></div>
      </div>

    </div>
  </section>
    </div>
  )
}

export default Testimonial
