import React from "react";
import campusdash from "../../asstes/portfolio/Campus Dash Logo.png";
import tweetdrafter from "../../asstes/portfolio/Tweet Drafter Logo.png";
import mynote from "../../asstes/portfolio/My Note.webp";
import aesencryptor from "../../asstes/portfolio/AES Encrypto Group.png";

const MobileApplicationDevelopment = () => {
  return (
    <div>
      <section id="portfolio" class="portfolio">
        <div class="container">
          <div
            class="row portfolio-container"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div class="col-lg-4 col-md-6 portfolio-item filter-card">
              <div class="portfolio-wrap">
                <img
                  src={campusdash}
                  class="img-fluid"
                  alt="Campus Dash Logo"
                />
                <div class="portfolio-info">
                  <h4>Campus Dash</h4>
                  <p>Campus Dash is a Delivery Startup Rider</p>
                  <div class="portfolio-links">
                    <a
                      href="assets/img/portfolio/Campus Dash Logo.png"
                      data-gallery="portfolioGallery"
                      class="portfolio-lightbox"
                      title="Card 2"
                    >
                      <i class="bx bx-plus"></i>
                    </a>
                    <a
                      href="/portfolio/portfolio-117.html"
                      title="More Details"
                    >
                      <i class="bx bx-link"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 portfolio-item filter-card">
              <div class="portfolio-wrap">
                <img src={tweetdrafter} class="img-fluid" alt="Tweet Drafter" />
                <div class="portfolio-info">
                  <h4>Tweet Drafter</h4>
                  <p>
                    Manage Your Tweets, Draft Your Tweets before Publishing
                    Right From Your Device.
                  </p>
                  <div class="portfolio-links">
                    <a
                      href="/assets/img/portfolio/Tweet Drafter Logo.png"
                      data-gallery="portfolioGallery"
                      class="portfolio-lightbox"
                      title="Web 3"
                    >
                      <i class="bx bx-plus"></i>
                    </a>
                    <a
                      href="/portfolio/portfolio-112.html"
                      title="More Details"
                    >
                      <i class="bx bx-link"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 portfolio-item filter-card">
              <div class="portfolio-wrap">
                <img src={mynote} class="img-fluid" alt="mynote" />
                <div class="portfolio-info">
                  <h4>My Note</h4>
                  <p>
                    My Note is an App to store your various thoughts and notes
                    about anything.{" "}
                  </p>
                  <div class="portfolio-links">
                    <a
                      href="/assets/img/portfolio/My Note.webp"
                      data-gallery="portfolioGallery"
                      class="portfolio-lightbox"
                      title="App 2"
                    >
                      <i class="bx bx-plus"></i>
                    </a>
                    <a
                      href="/portfolio/portfolio-114.html"
                      title="More Details"
                    >
                      <i class="bx bx-link"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 portfolio-item filter-card">
              <div class="portfolio-wrap">
                <img src={aesencryptor} class="img-fluid" alt="AES Encyptor" />
                <div class="portfolio-info">
                  <h4>AES Encryptor</h4>
                  <p>Message Encryptor</p>
                  <div class="portfolio-links">
                    <a
                      href="assets/img/portfolio/e"
                      data-gallery="portfolioGallery"
                      class="portfolio-lightbox"
                      title="Card 2"
                    >
                      <i class="bx bx-plus"></i>
                    </a>
                    <a
                      href="/portfolio/portfolio-111.html"
                      title="More Details"
                    >
                      <i class="bx bx-link"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MobileApplicationDevelopment;
