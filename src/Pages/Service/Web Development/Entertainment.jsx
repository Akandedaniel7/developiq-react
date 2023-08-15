import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../../Components/Header/Navbar';
import '../service.css';
import Footer from '../../../Components/Footer/Footer';
import entertainment from '../../../asstes/entertainment.jpeg';

const Entertainment = () => {
  return (
    <div>
      <Header />
      <section id="breadcrumbs" class="breadcrumbs">
      <div class="container">
  
        <div class="d-flex justify-content-between align-items-center">
          <h2>Entertainment </h2>
          <ol>
            <li><Link to="/WebDevelopment">Web Development</Link></li>
            <li>Entertainment </li>
          </ol>
        </div>
  
      </div>
    </section>
  
       
    <section id="webDesign" class="webDesign">
      <div class="container">
      <div class="webdesignflex">
        
        <div class="Custom">
          <div class="ecommerceImg">
              <img src={ entertainment } alt="etertainmentImage" />
          </div>
          <p>
              Everyone is ready to click on the latest gist in town, listen to the latest music, watch the latest video, etc.
          </p>
         
         
          <p>
              Whether you want a music site, a video site, a blogging site, or an all-around entertainment site, we have a committed team of 
              professionals that are skilled at turning your vision into reality.
          </p>
  
          <p>
           <b>DevelopIQ develops a variety of entertainment websites that are responsive (mobile friendly).
          </b> 
          </p>
  
          <div class="entertainment-details">
           
              <h3>The entertainment sites we build are</h3>
              <hr />
  
             <p>Music site</p>
             <p>Music video site</p>
             <p>Movies site</p>
             <p>Blogging site</p>
             <p>News site</p>
             <p>Celebrity gossips</p>
             <p>Tv Shows</p>
          </div>
         
          { /* listing  */ }
  
        </div>
  
       <div>
  
        { /* search  */ }
        <div>
          <div class="searchsection">
           <div class="d-flex justify-content-center align-items-center searchsectionchild">
            <input type="text" placeholder="Search Services" />
            <i class="bi bi-search"></i>
           </div>
          </div>
        </div> { /*End of search */ }
       
        { /* categories  */ }
        <div>
          <div class="categories">
            <div class="categorieschild">
            <h4>categories</h4>
            { /* web development  */ }
            <div class="webDevelopment active">
              <i class="bi bi-play-fill"></i>
              <Link to="/web development.html">Web Development</Link>
            </div>
  
            { /* Mobile App Development  */ }
            <div class="MobileAppdDevelopment">
              <i class="bi bi-play-fill"></i>  
              <Link to="/MobileApplication">Mobile App Development</Link>
            </div>
  
            { /* branding & publicity  */ }
            <div class="brandingPublicity">
              <i class="bi bi-play-fill"></i>  
              <Link to="/BrandingandPublicity">Branding $ Publicity</Link>
            </div>
  
            { /* Maintainance */ }
            <div class="maintainace">
              <i class="bi bi-play-fill"></i>
              <a href="/">Maintainance</a>
            </div>
          </div>
        </div>
        </div>
  
     { /*   newsletter  */ } 
        <div>
          <div class="generalNewsletter">
            <div class="generalNewsletterchild">
              <h6>SUBSCRIBE</h6>
              <h3>SUBSCRIBE FOR NEWSLETTER</h3>
              <form action="">
                <input type="text" placeholder="Email" />
                <button type="submit">SUBSCRIBE</button>
              </form>
            </div>
          </div>
        </div>
  
       <div>
  
       </div>
        </div>
      </div>
      </div>
    </section>
      <Footer />
    </div>
  )
}

export default Entertainment
