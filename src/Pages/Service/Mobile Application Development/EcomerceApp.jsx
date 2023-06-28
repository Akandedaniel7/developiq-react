import React from 'react';
import Header from '../../../Components/Header/Navbar';
import '../service.css';
import Footer from '../../../Components/Footer/Footer';
import ecomerceapp from '../../../asstes/ecommerce app.jpg';
import ecomerceapp2 from '../../../asstes/ecommerce app 2.jpeg';

const EcomerceApp = () => {
  return (
    <div>
      <Header />
      <section id="breadcrumbs" class="breadcrumbs">
      <div class="container">
  
        <div class="d-flex justify-content-between align-items-center">
          <h2>E-commerce App </h2>
          <ol>
            <li><a href="/mobile application.html">Mobile App Developemnt</a></li>
            <li> E-commerce App</li>
          </ol>
        </div>
  
      </div>
    </section>

    <section id="webDesign" class="webDesign">
      <div class="container">
      <div class="webdesignflex">
        
        <div>
          <div class="ecommerceImg">
              <img src={ ecomerceapp } alt="" />
          </div>
          <h2>
             <b>Build E-commerce App to Improve your Business Sales </b> 
          </h2>
          <p>
              Promote your sales online with E-commerce development services from Talosmart Technologies.
          </p>
          <p>
              Mobile apps are essential for businesses to have an online presence and interact with customers. 
              E-commerce is the heart of sales worldwide and mobile applications are the key to success. Without a Mobile application, 
              businesses are meaningless in the digital world.
  
          </p>
  
          
          <h3>
            <b>Why E-commerce apps</b>
          </h3>
          <h5>
              <b>Order from the phone directly</b>
          </h5>
             
          <p>
              Mobile apps are better than mobile browsers when it comes to accessing online stores. 78% of users surveyed said they would rather 
              use a mobile app than access a store via a mobile browser. This is due to the convenience of using an app while shopping, as 
              there is no need to remember a URL and log in. Additionally, mobile apps provide better security and speed than a mobile browser.
          </p>
  
          <h5>
              <b>Increase sales</b>
          </h5>
          <p>
              Mobile apps are more popular for shopping due to their ease of browsing and higher average order value than mobile browsers and desktop screens.
           This gives customers an opportunity to see what products are offering.
          </p>
  
          <h5>
              <b>Convinence and ease</b>
          </h5>
  
          <p>
              Your store's layout can have a big impact on customer satisfaction. Mobile apps are particularly restrictive in terms of layout, which can lead to a more 
              satisfying user experience. Lack of distractions will help customers get to the checkout faster and return more often, as they’ll remember how easy it is to make purchases in your e-commerce app.
          </p>
  
          <div class="ecommerceImg">
              <img src={ ecomerceapp2 } alt="" />
          </div>
  
        </div>
  
       <div>
  
        { /*search  */ }
        <div>
          <div class="searchsection">
           <div class="d-flex justify-content-center align-items-center searchsectionchild">
            <input type="text" placeholder="Search Services" />
            <i class="bi bi-search"></i>
           </div>
          </div>
        </div> {/*End of search */ }
       
        { /*categories  */ }
        <div>
          <div class="categories">
            <div class="categorieschild">
            <h4>Categories</h4>
            { /*web development  */ }
            <div class="webDevelopment ">
              <i class="bi bi-play-fill"></i>
              <a href="/web development.html">Web Development</a>
            </div>
  
            { /*Mobile App Development  */ }
            <div class="MobileAppdDevelopment active">
              <i class="bi bi-play-fill"></i>  
              <a href="/mobile application.html">Mobile App Development</a>
            </div>
  
            { /*branding & publicity  */ }
            <div class="brandingPublicity">
              <i class="bi bi-play-fill"></i>  
              <a href="/">Branding $ Publicity</a>
            </div>
  
            { /*Maintainance */ }
            <div class="maintainace">
              <i class="bi bi-play-fill"></i>
              <a href="/">Maintainance</a>
            </div>
          </div>
        </div>
        </div>
  
        { /*newsletter  */ }
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

export default EcomerceApp
