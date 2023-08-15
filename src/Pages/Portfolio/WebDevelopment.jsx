import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import milesstone from '../../asstes/milesstone.jpg';
import elizabeth from '../../asstes/Elizabeth.jpg';
import arcadestructure from '../../asstes/arcadestructures.jpg';

const WebDevelopment = () => {
  return (
    <section id="portfolio" class="portfolio">
    <div class="container"> 
    <div class="row portfolio-container" data-aos="fade-up" data-aos-delay="400">    
      <div class="col-lg-4 col-md-6 portfolio-item filter-app">
      <div class="portfolio-wrap">
        <img src={ milesstone } class="img-fluid" alt="millesstone" />
        <div class="portfolio-info">
          <h4>Milesstone</h4>
          <p>a constrction website</p>
          <div class="portfolio-links">
            <a href="assets/img/portfolio/milesstone 2.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox" title="App 1"><i class="bx bx-plus"></i></a>
            <a href="/portfolio/portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
          </div>
        </div>
      </div>
    </div>

    <div class="col-lg-4 col-md-6 portfolio-item filter-app">
    <div class="portfolio-wrap">
      <img src={ elizabeth } class="img-fluid" alt="Elizabeh" />
      <div class="portfolio-info">
        <h4>ELizabeth</h4>
        <p>A Website for a Journalist</p>
        <div class="portfolio-links">
          <a href="/assets/img/portfolio/ELizabeth.png" data-gallery="portfolioGallery" class="portfolio-lightbox" title="Web 3"><i class="bx bx-plus"></i></a>
          <a href="/portfolio/portfolio-101.html" title="More Details"><i class="bx bx-link"></i></a>
        </div>
      </div>
    </div>
  </div>

  <div class="col-lg-4 col-md-6 portfolio-item filter-app">
  <div class="portfolio-wrap">
    <img src={ arcadestructure } class="img-fluid" alt="arcadesructures" />
    <div class="portfolio-info">
      <h4>ArcadeStructures</h4>
      <p>A construction Website</p>
      <div class="portfolio-links">
        <a href="assets/img/portfolio/arcadestucture (1).jpg" data-gallery="portfolioGallery" class="portfolio-lightbox" title="Web 3"><i class="bx bx-plus"></i></a>
        <a href="/portfolio/portfolio-details2.html" title="More Details"><i class="bx bx-link"></i></a>
      </div>
    </div>
  </div>
</div>
    </div>
    </div>
      </section>
  )
}

export default WebDevelopment
