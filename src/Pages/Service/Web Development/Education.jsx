import React from 'react';
import Header from '../../../Components/Header/Navbar';
import '../service.css';
import { Link } from 'react-router-dom';
import Footer from '../../../Components/Footer/Footer';
import educational from '../../../asstes/educational.jpeg';

const Education = () => {
  return (
    <div>
      <Header />
      {/* ======= Breadcrumbs ======= */}
   <section id="breadcrumbs" class="breadcrumbs">
    <div class="container">

      <div class="d-flex justify-content-between align-items-center">
        <h2>Educational </h2>
        <ol>
          <li><Link to="/WebDevelopment">Web Development</Link></li>
          <li>Educational </li>
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
            <img src={ educational } alt="EducationalImage" />
        </div>
        <h2>
            Future of Education 
        </h2>
        <p>
            Why create a website for your school
        </p>
        <p>
             The educational system is quickly transforming into a digital one. Schools are
              incorporating technology into their facilities to make them seem more 
              contemporary and provide a comfortable learning environment for students. 

        </p>
        <p>
            The educational system will continue to develop over time and add more value if it is 
            connected with technology. Over time, education has changed to the point where you now 
            need to verify your results online.
        </p>
       
        {/* listing  */}

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
          <div class="webDevelopment active">
            <i class="bi bi-play-fill"></i>
            <Link to="/WebDevelopment">Web Development</Link>
          </div>

          {/* Mobile App Development  */}
          <div class="MobileAppdDevelopment">
            <i class="bi bi-play-fill"></i>  
            <Link to="/mobile application.html">Mobile App Development</Link>
          </div>

          {/* branding & publicity  */}
          <div class="brandingPublicity">
            <i class="bi bi-play-fill"></i>  
            <Link to="/BrandingandPublicity">Branding $ Publicity</Link>
          </div>

          {/* Maintainance */}
          <div class="maintainace">
            <i class="bi bi-play-fill"></i>
            <a href="/">Maintainance</a>
          </div>
        </div>
      </div>
      </div>

      {/*  newsletter  */}
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

export default Education
