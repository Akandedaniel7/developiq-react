import React from 'react';
import countSvg from '../../asstes/counts-img.svg';

const Counts = () => {
  return (
    <div>
    <section id="counts" class="counts">
    <div class="container">

      <div class="row">
        <div class="image col-xl-5 d-flex align-items-stretch justify-content-center justify-content-xl-start" data-aos="fade-right" data-aos-delay="150">
          <img src={countSvg} alt="count" class="img-fluid" />
        </div>

        <div class="col-xl-7 d-flex align-items-stretch pt-4 pt-xl-0" data-aos="fade-left" data-aos-delay="300">
          <div class="content d-flex flex-column justify-content-center">
            <div class="row">
              <div class="col-md-6 d-md-flex align-items-md-stretch">
                <div class="count-box">
                  <i class="bi bi-emoji-smile"></i>
                  <span data-purecounter-start="0" data-purecounter-end="35" data-purecounter-duration="1" class="purecounter"></span>
                  <p><strong>Happy Clients</strong> Software solutions drive organizational success stories.</p>
                </div>
              </div>

              <div class="col-md-6 d-md-flex align-items-md-stretch">
                <div class="count-box">
                  <i class="bi bi-journal-richtext"></i>
                  <span data-purecounter-start="0" data-purecounter-end="45" data-purecounter-duration="1" class="purecounter"></span>
                  <p><strong>Projects</strong> Showing excellence in various software projects.</p>
                </div>
              </div>

              <div class="col-md-6 d-md-flex align-items-md-stretch">
                <div class="count-box">
                  <i class="bi bi-clock"></i>
                  <span data-purecounter-start="0" data-purecounter-end="8" data-purecounter-duration="1" class="purecounter"></span>
                  <p><strong>Years of experience</strong> Experienced software solutions developed using extensive knowledge.</p>
                </div>
              </div>

              {/* <div class="col-md-6 d-md-flex align-items-md-stretch">
                <div class="count-box">
                  <i class="bi bi-award"></i>
                  <span data-purecounter-start="0" data-purecounter-end="15" data-purecounter-duration="1" class="purecounter"></span>
                  <p><strong>Awards</strong> rerum asperiores dolor alias quo reprehenderit eum et nemo pad der</p>
                </div>
              </div> */}
            </div>
          </div>{/* End .content*/} {/* */}
        </div>
      </div>

    </div>
  </section>
    </div>
  )
}

export default Counts
