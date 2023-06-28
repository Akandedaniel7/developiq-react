import React from 'react';
import Header from '../../../Components/Header/Navbar';
import '../service.css';
import Footer from '../../../Components/Footer/Footer';
import userinterface from '../../../asstes/user interface.jpeg';

const UserInteface = () => {
  return (
    <div>
    <Header />
    <section id="breadcrumbs" class="breadcrumbs">
    <div class="container">

      <div class="d-flex justify-content-between align-items-center">
        <h2>User Interface </h2>
        <ol>
          <li><a href="/Branding and Publicity.html">Branding and Publicity</a></li>
          <li>User Interface</li>
        </ol>
      </div>

    </div>
  </section>

  <section id="webDesign" class="webDesign">
    <div class="container">
    <div class="webdesignflex">
      
      <div>
        <div class="ecommerceImg">
            <img src={ userinterface } alt="" />
        </div>
        <h2>
           <b>Why you need a good-looking interface?</b> 
        </h2>
        <p>
            An attractive interface draws people to the service
             you offer and gives your brand and company a professional appearance.

        </p>

        <p>
            DevelopIQ will assist you in designing a user interface that will satisfy
             your clients and win them over to your brand.
        </p>
        <h3>
          <b>Benefits of a Good User Interface</b>
        </h3>

        <h4>
            <b>Clarify your vision:</b>
        </h4>
        <p>
            By going through this procedure, you'll be able to pinpoint exactly how you must meet 
            your audience's expectations. It will also help you express exactly what sets you apart
             from your competitors by clarifying who you are and what you want to achieve.
        </p>

        <h4>
            <b>Make your mark:</b>
        </h4>
        <p>
          Investing in professionally-led UX and UI design can help businesses stand out from the crowd
           and understand their customers. Without proper insights, businesses may assume incorrect assumptions
           about users' needs, expectations, and frustrations, leading to a poor online experience.
        </p>

        <h4>
            <b>Customer confidence: </b>
        </h4>
        <p>
          Good UI design is essential for building customer confidence in a company and brand. Poor site design can
           negatively affect the delivery of a great product or service.
        </p>

        <h4>
            <b> Development times are impressive:</b>
        </h4>
        <p>
          UI design created as a result of a UX process and incorporating research and insights avoids the need to 
          fix problems that could have been avoided. Design decisions are informed and made at the right point in the process.
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
            <a href="/Branding and Publicity.html">Branding $ Publicity</a>
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

export default UserInteface
