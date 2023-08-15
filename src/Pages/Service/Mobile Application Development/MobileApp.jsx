import React from 'react';
import Header from '../../../Components/Header/Navbar';
import '../service.css';
import { Link } from 'react-router-dom';
import Footer from '../../../Components/Footer/Footer';

const MobileApp = () => {
  return (
    <div>
    <Header />
    <section id="breadcrumbs" class="breadcrumbs">
    <div class="container">

      <div class="d-flex justify-content-between align-items-center">
        <h2>Mobile App </h2>
        <ol>
          <li><Link to="/MobileApplication">Mobile Application Development</Link></li>
          <li>Mobile App</li>
        </ol>
      </div>

    </div>
  </section>

  <section id="webDesign" class="webDesign">
    <div class="container">
    <div class="webdesignflex">
      
      <div>
        <h2>
           <b> Our Mobile Application Development Services</b> 
        </h2>
        <p>
           Make your presence felt online with Mobile development services from Talosmart Technologies.

        </p>
        <p>
            With the rapidly changing business landscape, the evolution of technology, and increased online transactions, it is essential to have an online presence. 
        </p>

        <p>
          Businesses are increasingly moving with Mobile apps to grab eyeballs and interact and connect with customers and other businesses. With online interactions 
          amongst communities on a high, it is essential to have your own mobile application with the face of your organization in the digital world. Without a Mobile
         application, your business may likely find it difficult to survive in your industry.
        </p>
        <h4>
          <b>What we offer:</b>
        </h4>
        <p>
          Our team has years of experience in mobile development and can provide you with the next generation of services. We take care of all aspects of
           your mobile application life-cycle, so you can focus on your business.
        </p>
        
        <h3>
            <b>Mobile Development Services</b>
        </h3>
        <p>
          At DevelopIQ Technologies, we have a team of expert professionals mastering the art of Mobile development services across a portfolio of below offerings:
          
        </p>

        <h3>
            <b>
              Android development
            </b>
        </h3>
        <p>
          Our team of experts helps in the development of Android applications with functional integration to help build up the business idea to take your business to the
           next level with the latest technology
        </p>

        <h3>
            <b>Ios Development</b>
        </h3>
        <p>
          We build IOS native applications to target your customers who make use of IOS in other for your IOS customers not to be left out 
        </p>

        <h3>
            <b>Mobile Web-App</b>
        </h3>
        <p>
         We build Mobile web apps for customers to have a fully fledge application feels for customers using mobile to access their sites
        </p>

        <h3>
            <b>React Native and Flutter</b>
        </h3>
        <p>
          We create a cross-platform mobile application to help you manage your client in both IOS and Android users with a single code base
        </p>



      </div>

     <div>

      { /* search */ }
      <div>
        <div class="searchsection">
         <div class="d-flex justify-content-center align-items-center searchsectionchild">
          <input type="text" placeholder="Search Services" />
          <i class="bi bi-search"></i>
         </div>
        </div>
      </div> { /*End of search*/ }
     
      { /* categories */ }
      <div>
        <div class="categories">
          <div class="categorieschild">
          <h4>categories</h4>
          { /* web development */ }
          <div class="webDevelopment active">
            <i class="bi bi-play-fill"></i>
            <a href="/">Web Development</a>
          </div>

          { /* branding & publicity */ }
          <div class="brandingPublicity">
            <i class="bi bi-play-fill"></i>  
            <Link to="/BrandingandPublicity">Branding $ Publicity</Link>
          </div>

          { /* Maintainance*/ }
          <div class="maintainace">
            <i class="bi bi-play-fill"></i>
            <a href="/">Maintainance</a>
          </div>
        </div>
      </div>
      </div>

      { /* newsletter */ }
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

export default MobileApp
