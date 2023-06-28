import React from 'react';
import Header from '../../../Components/Header/Navbar';
import '../service.css';
import Footer from '../../../Components/Footer/Footer';
import ecommerce from '../../../asstes/ecomerce.jpg';

const Ecommerce = () => {
  return (
    <div>
    <Header />
    {/* ======= Breadcrumbs ======= */}
    <section id="breadcrumbs" class="breadcrumbs">
     <div class="container">
 
       <div class="d-flex justify-content-between align-items-center">
         <h2>Ecommerce </h2>
         <ol>
           <li><a href="/web development.html">Web Development</a></li>
           <li>Ecommerce</li>
         </ol>
       </div>
 
     </div>
   </section>
 
    {/* web design */}
   <section id="webDesign" class="webDesign">
     <div class="container">
     <div class="webdesignflex">
       
       <div>
         <div class="ecommerceImg">
             <img src={ ecommerce } alt="" />
         </div>
         <h2>
             Boost Your Business with Our E-Commerce Services 
         </h2>
         <p>
             Increase your business's sales by using an e-commerce website.
         </p>
         <p>
             Electronic purchasing or selling of goods through online stores or the Internet is known as "e-commerce" 
             (or "electronic commerce"). Mobile commerce, electronic money transfers, supply chain management, 
             Internet marketing, online transaction processing, electronic data exchange (EDI), inventory 
             management systems, and automated data gathering systems are just a few of the technologies 
             that are used in electronic commerce. The largest segment of the electronics industry, e-commerce 
             is in turn driven by technical developments in the semiconductor sector. 
 
         </p>
         <p>
             Many more chances exist for entrepreneurs trying to grow their businesses and reach out to a wider audience thanks to the 
             internet's accessibility, which allows millions of people across the world to read your website at 
             any time. It makes sense to consider moving your business online if you want to increase your reach 
             when you compare the number of people you can reach through a website to the number you can reach 
             through a high street store or local advertising. DevelopIQ will take care of it for you. 
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
 
       {/* search  */}
       <div>
         <div class="searchsection">
          <div class="d-flex justify-content-center align-items-center searchsectionchild">
           <input type="text" placeholder="Search Services" />
           <i class="bi bi-search"></i>
          </div>
         </div>
       </div> 

       {/* categories */}
       <div>
         <div class="categories">
           <div class="categorieschild">
           <h4>Categories</h4>
           {/* web development */}
           <div class="webDevelopment active">
             <i class="bi bi-play-fill"></i>
             <a href="/web development.html">Web Development</a>
           </div>
 
           {/* mobile app development */}
           <div class="MobileAppDevelopment">
             <i class="bi bi-play-fill"></i>  
             <a href="/mobile application.html">Mobile App Development</a>
           </div>
 
           {/*branding & publicity */}
           <div class="brandingPublicity">
             <i class="bi bi-play-fill"></i>  
             <a href="/">Branding $ Publicity</a>
           </div>
 
           {/* Maintainance */}
           <div class="maintainace">
             <i class="bi bi-play-fill"></i>
             <a href="/">Maintainance</a>
           </div>
         </div>
       </div>
       </div>
 
       {/* newsletter */}
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

export default Ecommerce
