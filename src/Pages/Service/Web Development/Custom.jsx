import React from 'react';
import Header from '../../../Components/Header/Navbar';
import '../service.css';
import { Link } from 'react-router-dom';
import Footer from '../../../Components/Footer/Footer';
import custom from '../../../asstes/custom.jpeg';

const Custom = () => {
  return (
    <div>
      <Header />
      <section id="breadcrumbs" class="breadcrumbs">
      <div class="container">
  
        <div class="d-flex justify-content-between align-items-center">
          <h2>Custom </h2>
          <ol>
            <li><Link to="/WebDevelopment">Web Development</Link></li>
            <li>Custom </li>
          </ol>
        </div>
  
      </div>
    </section>{ /* End Breadcrumbs */ }
  
       { /* web design  */ }
    <section id="webDesign" class="webDesign">
      <div class="container">
      <div class="webdesignflex">
        
        <div class="Custom">
          <div class="ecommerceImg">
              <img src={ custom } alt="" />
          </div>
          <h2>
             Create a Custom Website
          </h2>
          <p>
            Make your business, portfolio, goods, and services know with a custom website
          </p>
          <p>
            By allowing DevelopIQ to design a unique website for your company or personal 
            website for your products or services, you may stand out from all other rivals
           outside. 
          </p>
          <p>
            DevelopIQ will work with you to develop an engaging website that will awe visitors and encourage them to visit 
            it frequently. This website will also be mobile-friendly, have a fantastic user experience, and 
            be constructed using the most up-to-date technology.
          </p>
          <h3>
            The reason you need a website
          </h3>
  
          <div class="custom-details">
             <p>Makes you visible to everyone in the globe
             </p>
             <p>
              Gives you a professional appearance.
             </p>
             <p>
              Connects with people
             </p>
             <p>
              Cheap and Affordable
             </p>
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
              <Link to="/WebDevelopmentl">Web Development</Link>
            </div>
  
            { /* Mobile App Development  */ }
            <div class="MobileAppDevelopment">
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
  
{ /* newsletter  */ }
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

export default Custom
