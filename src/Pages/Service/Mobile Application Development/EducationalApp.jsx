import React from 'react';
import Header from '../../../Components/Header/Navbar';
import '../service.css';
import Footer from '../../../Components/Footer/Footer';
import educationalapp from '../../../asstes/educational app.jpeg';

const EducationalApp = () => {
  return (
    <div>
    <Header />
    <section id="breadcrumbs" class="breadcrumbs">
    <div class="container">

      <div class="d-flex justify-content-between align-items-center">
        <h2>Educational App </h2>
        <ol>
          <li><a href="/mobile application.html">Mobile Appication Development</a></li>
          <li>Educational App </li>
        </ol>
      </div>

    </div>
  </section>{ /* End Breadcrumbs */ }

     { /* web design  */ }
  <section id="webDesign" class="webDesign">
    <div class="container">
    <div class="webdesignflex">
      
      <div>
        <div class="ecommerceImg">
            <img src={ educationalapp } alt="" />
        </div>
        <h2>
           <b>Create a unique identity for your school.</b> 
        </h2>
        <p>
            Be amongst the top schools that stand out from others and be recognized around the world with our Education services. 
        </p>
        <p>
            Schools must establish an online presence to attract attention, engage with parents and students, and build connections.

        </p>
        <p>
            Having a mobile application that represents your company in the digital world is crucial because of the rise in community 
            connections online. You could struggle to compete and distinguish out from your competitors without a mobile application.

        </p>

        <h4>
            <b>Benefits of education application</b></h4>
        <h3>
          <b>Interactive learning</b>
        </h3>
        <p>
            The days when students could only read books at the library are long gone. These days, people choose to learn through e-books and educational
             mobile applications since they can do it at their own pace.
        </p>
        <p>
            Today, there are tens of thousands of educational applications for various ages and levels that can be found in the Play Store and the App Store.
             These apps guarantee dynamic learning for students by translating dry teachings into fun games and movies.
        </p>
        
        <h3>
            <b>Round the Clock Availability</b>
        </h3>

        <p>
            Since education mobile applications are accessible around-the-clock, unlike institutions, learning is not time-limited. The software enables students to
             get answers to their questions anytime they want and even replay the lecture for a clearer comprehension. Millions of students are reluctant to ask questions
            in class.
        </p>

        <p>
            We also know that time-bound learning is ineffective since kids are easily distracted and can't focus for extended periods of time. As a result, educational apps solve 
           this problem the best and enable students to learn new topics whenever it's convenient for them.
        </p>

        <h3>
            <b>Online Study Material</b>
        </h3>
        <p>
            Now there is no need to buy books and study materials, as you can find all the books online. Online tutorials and ebooks made students' lives easier and hassle-free. With
         the advancement of technology, readers can discover a variety of books with a mere click.
        </p>

        <h3>
            <b>Track the Progress</b> </h3>
        <p>
            Educational apps allow users to track their progress, which is one of the most important things that everyone explores. Now it is easy to track overall or individual subject 
            progress and improve accordingly. Educational apps are also beneficial for parents as it enables them to track their children’s study progress flow and guide them correspondingly.
        </p>

        <h3>
            <b>Aligning with Future Technology</b>
        </h3>

        <p>The future of education apps seems to be illuminating. 
        
        Further, the apps will combine more futuristic technologies like Virtual Reality, Augmented Reality, IoT and others to make the educational sector more attractive. </p>
        <p>By having an app ahead of time, you are primed to take an advantage of the opportunities that these technologies will bring, such offerings as a richer and more engaging experience compared to late adopters.</p>

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

          { /* Mobile App Development  */ }
          <div class="MobileAppdDevelopment active">
            <i class="bi bi-play-fill"></i>  
            <a href="/mobile application.html">Mobile App Development</a>
          </div>

          { /* branding & publicity  */ }
          <div class="brandingPublicity">
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

export default EducationalApp
