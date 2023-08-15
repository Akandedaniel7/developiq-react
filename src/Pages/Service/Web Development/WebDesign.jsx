import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../../Components/Header/Navbar';
import Footer from '../../../Components/Footer/Footer';
import '../service.css';

const WebDesign = () => {
  return (
    <div>
     <Header />
    <section id="breadcrumbs" class="breadcrumbs">
     <div class="container">
 
       <div class="d-flex justify-content-between align-items-center">
         <h2>Web design</h2>
         <ol>
           <li><Link to="/WebDevelopment">Web Development</Link></li>
           <li>Web Design </li>
         </ol>
       </div>
 
     </div>
   </section>

   <section id="webDesign" class="webDesign">
     <div class="container">
     <div class="webdesignflex">
       
       <div>
         <h2>
           Our Website Development Services 
         </h2>
         <p>
           Make your presence felt online with website development services from Talosmart Technologies.
         </p>
         <p>
           With the rapidly changing business landscape, the evolution of technology and increased online transactions,
            it is essential to have an online presence. Businesses are increasingly moving online to grab eyeballs and 
            interact and connect with customers and other businesses. With online interactions amongst communities on a 
            high, it is essential to have your own website- the face of your organization in the digital world. Without a
             website your existence in the digital world is meaningless!
         </p>
         <p>
           From the next-gen HTML 5 development to providing eCommerce solutions and open source content management systems,
            the web has become a pool of solutions and choices available for your tailored requirements. Talosmart Technologies
             is a leading web development company based in Nigeria. We are a “one stop solution” for all your web development 
             needs. Our solutions are innovative, futuristic and cost-effective.
         </p>
         <h3>
           We can handle everything about your website
         </h3>
         <p>
           Our team of professionals comes with years of domain expertise and experience across industries. Come and partner with
            us to witness the next generation of web development services.
         </p>
         <p>
           You don't have to worry, we have you covered throughout your website life-cycle. We can handle everything while you
            concentrate on business.
         </p>
 
       </div>
 
      <div>
 
     
       <div>
         <div class="searchsection">
          <div class="d-flex justify-content-center align-items-center searchsectionchild">
           <input type="text" placeholder="Search Services" />
           <i class="bi bi-search"></i>
          </div>
         </div>
       </div> 
      
       <div>
         <div class="categories">
           <div class="categorieschild">
           <h4>categories</h4>

           <div class="webDevelopment active">
             <i class="bi bi-play-fill"></i>
             <Link to="/WebDevelopment">Web Development</Link>
           </div>
 

           <div class="MobileAppdDevelopment">
             <i class="bi bi-play-fill"></i>  
             <Link to="/MobileApplication">Mobile App Development</Link>
           </div>
           

           <div class="brandingPublicity">
             <i class="bi bi-play-fill"></i>  
             <Link to="/BrandingandPublicity">Branding $ Publicity</Link>
           </div>
 
           <div class="maintainace">
             <i class="bi bi-play-fill"></i>
             <a href="/">Maintainance</a>
           </div>
         </div>
       </div>
       </div>
 
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

export default WebDesign
