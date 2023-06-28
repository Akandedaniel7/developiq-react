import React from 'react';
import Header from '../../../Components/Header/Navbar';
import '../service.css';
import Footer from '../../../Components/Footer/Footer';
import logo from '../../../asstes/Graphics logo.jpeg';

const LogoAndIdentity = () => {
  return (
    <div>
      <Header />
      <section id="breadcrumbs" class="breadcrumbs">
    <div class="container">

      <div class="d-flex justify-content-between align-items-center">
        <h2>Logo & Identity </h2>
        <ol>
          <li><a href="/Branding and Publicity.html">Branding and Publicity</a></li>
          <li>Logo & Identity</li>
        </ol>
      </div>

    </div>
  </section>
  
  <section id="webDesign" class="webDesign">
    <div class="container">
    <div class="webdesignflex">
      
      <div>
        <div class="ecommerceImg">
            <img src={logo} alt="" />
        </div>
        <h2>
           <b> Take your business to the next level with Logo & Identity services from DevelopIQ Technologies.</b>
        </h2>
        <p>
            Having an online presence is crucial given the quickly evolving business landscape, technological advancements, and rise 
            in online transactions. A strong logo helps your company stand out from the competition and build brand recognition. 
            With the popularity of online interactions across communities on the rise, having a distinctive logo that represents
             your business online is crucial. A logo will offer your company a strong identification and instill confidence in your brand among your consumers. 

        </p>
        <h3>
          <b>Benefits of a Good logo</b>
        </h3>
        <p>
          Give your brand a positive identity
        </p>
        <p>
          Have a unique identity
        </p>
        <p>
            Increase level of trust of customers
        </p>
        <p>
            Appear professional
        </p>
        <p>
            Visible around the world
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
      </div> { /*End of search */ }
     
      { /* categories  */ }
      <div>
        <div class="categories">
          <div class="categorieschild">
          <h4>Categories</h4>
          { /* web development  */ }
          <div class="webDevelopment ">
            <i class="bi bi-play-fill"></i>
            <a href="/web development.html">Web Development</a>
          </div>

          { /* mobile app development  */ }
          <div class="MobileAppDevelopment">
            <i class="bi bi-play-fill"></i>  
            <a href="/mobile application.html">Mobile App Development</a>
          </div>

          { /* branding & publicity  */ }
          <div class="brandingPublicity active">
            <i class="bi bi-play-fill"></i>  
            <a href="/">Branding $ Publicity</a>
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

export default LogoAndIdentity
