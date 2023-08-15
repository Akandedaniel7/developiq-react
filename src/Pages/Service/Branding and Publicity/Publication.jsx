import React from 'react';
import Header from '../../../Components/Header/Navbar';
import '../service.css';
import { Link } from 'react-router-dom';
import Footer from '../../../Components/Footer/Footer';
import publication from '../../../asstes/publication.jpeg';

const Publication = () => {
  return (
    <div>
    <Header />
    <section id="breadcrumbs" class="breadcrumbs">
    <div class="container">

      <div class="d-flex justify-content-between align-items-center">
        <h2>Publication </h2>
        <ol>
          <li><Link to="/BrandingandPublicity">Branding and Publicity</Link></li>
          <li>Publication</li>
        </ol>
      </div>

    </div>
  </section>
  
  <section id="webDesign" class="webDesign">
    <div class="container">
    <div class="webdesignflex">
      
      <div>
        <div class="ecommerceImg">
            <img src={ publication } alt="publicationImage" />
        </div>
        <h2>
            <b>Our Publication Service</b>
        </h2>
        <p>
            Making material available to the public is what it means to publish. 
            Although the phrase may be used in different ways depending on the country,
            it is typically used to refer to text, pictures, or other audio-visual information,
             including paper. Publication refers to both the act of publishing and any printed copies.
             </p>

            <p>
                Customers receive the greatest publication services from DevelopIQ, which 
                provides expert online and print publishing to reach your audience. 
            </p>
        <h3>
          <b>Why You Need A Professional Publishing Service</b>
        </h3>

        <h5>
            <b>Marketing:</b>
        </h5>
        <p>
            When writing for print, authors benefit from the ability to both profit and target a specific audience.
            In periodicals, advertisers provide additional revenue, and bookshops also make a lot of money.
        </p>

        <h5>
            <b>Time:</b>
        </h5>
        <p>
            Another drawback of print publication, related to editing, is the length of time required. In addition to the 
            time required for writing and editing, there is also the matter of the prnter. Keep in mind that it is a one-time
            offer. Online publications have the flexibility for change, despite the fact that they need a lot of work to edit and maintain.
        </p>

        <h6>
            <b>Faster Exposure with online Publication: </b>
        </h6>
        <p>
            One benefit of publication is that your book reaches the market more quickly. Because of the internet, a book may (theoretically) be 
            finished today and published online tomorrow. Even the most gifted authors require time to edit and proofread their work, therefore we
            do not advise using this strategy. However, the quickness of self-publishing can lead to more visibility and money in your bank account.
            However, releasing a book through one of the major publishing firms often takes six to 18 months.
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

export default Publication
