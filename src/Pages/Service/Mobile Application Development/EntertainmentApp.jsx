import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../../Components/Header/Navbar';
import '../service.css';
import Footer from '../../../Components/Footer/Footer';
import entertainmentapp from '../../../asstes/entertainment app.jpeg'

const EntertainmentApp = () => {
  return (
    <div>
      <Header />
      <section id="breadcrumbs" class="breadcrumbs">
      <div class="container">
  
        <div class="d-flex justify-content-between align-items-center">
          <h2>Entertainment </h2>
          <ol>
            <li><Link to="/MobileApplication">Mobile Application development</Link></li>
            <li>Entertainment </li>
          </ol>
        </div>
  
      </div>
    </section>{/* End Breadcrumbs */}
  
       {/* web design  */}
    <section id="webDesign" class="webDesign">
      <div class="container">
      <div class="webdesignflex">
        
        <div>
          <div class="ecommerceImg">
              <img src={ entertainmentapp } alt="enterainmentappimage" />
          </div>
          <h2>
             <b>Want An Entertainment App? </b>
          </h2>
          <p>
              Have an idea for creating an entertainment app?.
          </p>
          <p>
             
              Entertainment as a whole has been a relaxation for all, Everyone loves entertainment during their 
              leisure time and most times the mobile phone is their goto gadget for entertaining themselves.
          </p>
          <p>
              Bring your Entertainment ideas to DevelopIQ and let us help you achieve your dreams. We create all 
              kinds of entertainment apps ranging from music, movies apps, gallery apps, Entertainment news, games apps
              e.t.c. The Entertainment industry is worth $660 million and this is a good sector to invest time and money in. 
          </p>
  
          <h3>
              <b>Why Entertainment Application?</b>
          </h3>
  
          <p>
          The entertainment industry has a lot to offer, making an app out of this will boost your business
          </p>
          <p>
            At this point, apps are an integral part of our daily lives. The marketplace is crowded with all types of mobile apps.
             Today, even businesses who never would’ve needed apps in the past are getting into the game.
          </p>
  
          <p>Why?</p>
  
          <p>While some are doing their best to stay ahead of the tech curve, many are simply meeting customer demand for an app that 
             makes their lives easier.
          </p>
  
          <h3>
              <b>Everyone wants to be entertained</b>
          </h3>
  
          <p>
              Entertainment can be addictive, as it can help people establish a connection with a new customer, reduce stress, and make life easier.
              It can also be a great way to relax and take some time out of life.
          </p>
  
          <h3>
              <b>Easy to maintain</b>
          </h3>
  
           <p>
              The media and entertainment industry suffers from pirated video content, but entertainment industry apps have helped to reduce this problem
               by providing HD quality content at a reasonable price. Mobile apps have revolutionized the way people view content, making it available online
               for all niches of entertainment and news. Building a mobile app for your business line is a great idea.
              </p>
  
              <h3>
                  <b>Has a lot of fields </b>
              </h3>
  
              <p>The entertainment sector offers a variety of niches to pursue, including music, film, gaming, and others.You can pick an application from the many
                   available options that best suits your concept.</p>
  
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
        </div> {/*End of search */}
       
        {/* categories  */}
        <div>
          <div class="categories">
            <div class="categorieschild">
            <h4>Categories</h4>
            {/* web development  */}
            <div class="webDevelopment">
              <i class="bi bi-play-fill"></i>
              <a href="/web development.html">Web Development</a>
            </div>
  
            {/* Mobile App Development  */}
            <div class="MobileAppdDevelopment active">
              <i class="bi bi-play-fill"></i>  
              <a href="/mobile application.html">Mobile App Development</a>
            </div>
  
            {/* branding & publicity  */}
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
  
        {/* newsletter  */} 
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

export default EntertainmentApp
