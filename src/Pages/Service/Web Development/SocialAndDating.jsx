import React from 'react';
import Header from '../../../Components/Header/Navbar';
import { Link } from 'react-router-dom';
import '../service.css'
import Footer from '../../../Components/Footer/Footer';
import socialanddating from '../../../asstes/social and dating.jpeg';

const SocialAndDating = () => {
  return (
    <div>
    <Header />
    <section id="breadcrumbs" class="breadcrumbs">
    <div class="container">

      <div class="d-flex justify-content-between align-items-center">
        <h2>Socials and Dating </h2>
        <ol>
          <li><Link to="/WebDevelopment">Web Development</Link></li>
          <li>Socials and Dating</li>
        </ol>
      </div>

    </div>
  </section>

    
  <section id="webDesign" class="webDesign">
    <div class="container">
    <div class="webdesignflex">
      
      <div>
        <div class="ecommerceImg">
            <img src={ socialanddating } alt="SocialsandDatingImage" />
        </div>
        <h2>
           <b>What is an online dating site?</b> 
        </h2>
        <p>
            is a system that enables people to find and introduce themselves to potential connections on the Internet usually to develop personal, romantic, or sexual relationships. 
        </p>
        <p>
            Online dating is a service that provides specific tools (generally websites or software applications) for online dating through the use of Internet-connected personal computers or mobile devices.  

        </p>
        <p>
            It allows users to create a profile and upload personal information including (but not limited to) age, gender, sexual orientation, location, and appearance. 
            Members can also add photos or videos to their profiles. Once a profile has been created, members can view the profiles of other members 
            of the service, using the visible profile information to decide whether or not to initiate contact.
        </p>
        <h3>
          <b>Need a dating website?</b>
        </h3>
        <p>
            Consult us at DevelopIQ  to get a dating website made for you. Bring us your dating concept ideas, and we'll make them a reality.
        </p>
        <p>
            DevelopIQ will create a user-friendly, mobile-optimized dating site that will be a pleasure for your users to use.
        </p>
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
      </div>{ /*End of search */ }
     
     { /* categories  */ }
      <div>
        <div class="categories">
          <div class="categorieschild">
          <h4>categories</h4>
         { /* web development  */ }
          <div class="webDevelopment active">
            <i class="bi bi-play-fill"></i>
            <Link to="/WebDevelopment">Web Development</Link>
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

export default SocialAndDating
