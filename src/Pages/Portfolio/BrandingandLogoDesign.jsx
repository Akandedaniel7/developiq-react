import React from "react";
import branding1 from "../../asstes/portfolio/branding_1.jpg";
import branding4 from "../../asstes/portfolio/branding_4.png";
import branding5 from "../../asstes/portfolio/branding_5.jpg";
import branding6 from "../../asstes/portfolio/branding_6.jpg";

const BrandingandLogoDesign = () => {
  return (
    <div>
      <section id="portfolio" class="portfolio">
        <div class="container">
          <div
            class="row portfolio-container"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div class="col-lg-4 col-md-6 portfolio-item filter-web">
              <div class="portfolio-wrap">
                <img
                  src={branding4}
                  class="img-fluid"
                  alt="branding and logo design"
                />
                <div class="portfolio-info">
                  <h4>TownBox</h4>
                  <p>TownBox Logo design and Identity </p>
                  <div class="portfolio-links">
                    <a
                      href="/assets/img/portfolio/branding_4.png"
                      data-gallery="portfolioGallery"
                      class="portfolio-lightbox"
                      title="App 2"
                    >
                      <i class="bx bx-plus"></i>
                    </a>
                    <a
                      href="/portfolio/portfolio-113.html"
                      title="More Details"
                    >
                      <i class="bx bx-link"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 portfolio-item filter-web">
              <div class="portfolio-wrap">
                <img
                  src={branding1}
                  class="img-fluid"
                  alt="branding and logo design"
                />
                <div class="portfolio-info">
                  <h4>Salvory Peak</h4>
                  <p>Salvory Peak graphics design </p>
                  <div class="portfolio-links">
                    <a
                      href="/assets/img/portfolio/branding_1.jpg"
                      data-gallery="portfolioGallery"
                      class="portfolio-lightbox"
                      title="App 2"
                    >
                      <i class="bx bx-plus"></i>
                    </a>
                    <a
                      href="/portfolio/portfolio-102.html"
                      title="More Details"
                    >
                      <i class="bx bx-link"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 portfolio-item filter-web">
              <div class="portfolio-wrap">
                <img
                  src={branding5}
                  class="img-fluid"
                  alt="branding and logo design"
                />
                <div class="portfolio-info">
                  <h4>Electric</h4>
                  <p>Electric Logo design </p>
                  <div class="portfolio-links">
                    <a
                      href="/assets/img/portfolio/branding_5.jpg"
                      data-gallery="portfolioGallery"
                      class="portfolio-lightbox"
                      title="App 2"
                    >
                      <i class="bx bx-plus"></i>
                    </a>
                    <a
                      href="/portfolio/portfolio-116.html"
                      title="More Details"
                    >
                      <i class="bx bx-link"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 portfolio-item filter-web">
              <div class="portfolio-wrap">
                <img
                  src={branding6}
                  class="img-fluid"
                  alt="branding and logo design"
                />
                <div class="portfolio-info">
                  <h4>Rayo</h4>
                  <p>Rayo Logo design </p>
                  <div class="portfolio-links">
                    <a
                      href="/assets/img/portfolio/branding_6.jpg"
                      data-gallery="portfolioGallery"
                      class="portfolio-lightbox"
                      title="App 2"
                    >
                      <i class="bx bx-plus"></i>
                    </a>
                    <a
                      href="/portfolio/portfolio-100.html"
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

export default BrandingandLogoDesign;
