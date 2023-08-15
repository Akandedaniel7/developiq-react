import React from 'react';
import Header from '../../Components/Header/Navbar';
import { Link } from 'react-router-dom';
import '../../Components/General.css';
import '../About/about.css';
import Footer from '../../Components/Footer/Footer';
import blogOne from '../../asstes/Blog/blog-1.jpg';
import blogRecentOne from '../../asstes/Blog/blog-recent-1.jpg';
import blogRecentTwo from '../../asstes/Blog/blog-recent-2.jpg'


const Blog = () => {
  return(
   <div>
     <Header />
  {/* Breadcumbs*/}
     <div class="breadcrumbs-1 d-flex align-items-center">
     <div class="container position-relative d-flex flex-column align-items-center" data-aos="fade">
 
       <h2>Blog</h2>
       <ol>
         <li><Link to="/About">About</Link></li>
         <li>Blog</li>
       </ol>
 
     </div>
   </div>

   <main id="main">
   {/* ======= Blog Section ======= */}
   <section id="blog" class="blog">
    <div class="container" data-aos="fade-up" data-aos-delay="100">

      <div class="row gy-4 posts-list">

        <div class="col-xl-4 col-md-6">
          <div class="post-item position-relative h-100">

            <div class="post-img position-relative overflow-hidden">
              <img src={blogRecentOne} class="img-fluid" alt="blog" />
              <span class="post-date">December 12</span>
            </div>

            <div class="post-content d-flex flex-column">

              <h3 class="post-title">Dolorum optio tempore voluptas dignissimos cumque fuga qui quibusdam quia</h3>

              <div class="meta d-flex align-items-center">
                <div class="d-flex align-items-center">
                  <i class="bi bi-person"></i> <span class="ps-2">John Doe</span>
                </div>
                <span class="px-3 text-black-50">/</span>
                <div class="d-flex align-items-center">
                  <i class="bi bi-folder2"></i> <span class="ps-2">Politics</span>
                </div>
              </div>

              <p>
                Similique neque nam consequuntur ad non maxime aliquam quas. Quibusdam animi praesentium. Aliquam et laboriosam eius aut nostrum quidem aliquid dicta.
              </p>

              <hr />

              <a href="/about/blog/blog-details.html" class="readmore stretched-link"><span>Read More</span><i class="bi bi-arrow-right"></i></a>

            </div>

          </div>
        </div>{/* End post list item */}


        <div class="col-xl-4 col-md-6">
          <div class="post-item position-relative h-100">

            <div class="post-img position-relative overflow-hidden">
              <img src={blogOne} class="img-fluid" alt="blog" />
              <span class="post-date">December 12</span>
            </div>

            <div class="post-content d-flex flex-column">

              <h3 class="post-title">Dolorum optio tempore voluptas dignissimos cumque fuga qui quibusdam quia</h3>

              <div class="meta d-flex align-items-center">
                <div class="d-flex align-items-center">
                  <i class="bi bi-person"></i> <span class="ps-2">John Doe</span>
                </div>
                <span class="px-3 text-black-50">/</span>
                <div class="d-flex align-items-center">
                  <i class="bi bi-folder2"></i> <span class="ps-2">Politics</span>
                </div>
              </div>

              <p>
                Similique neque nam consequuntur ad non maxime aliquam quas. Quibusdam animi praesentium. Aliquam et laboriosam eius aut nostrum quidem aliquid dicta.
              </p>

              <hr />

              <a href="/about/blog/blog-details.html" class="readmore stretched-link"><span>Read More</span><i class="bi bi-arrow-right"></i></a>

            </div>

          </div>
        </div>{/* End post list item */}

        <div class="col-xl-4 col-md-6">
          <div class="post-item position-relative h-100">

            <div class="post-img position-relative overflow-hidden">
              <img src={blogRecentTwo} class="img-fluid" alt="blog" />
              <span class="post-date">March 19</span>
            </div>

            <div class="post-content d-flex flex-column">

              <h3 class="post-title">Nisi magni odit consequatur autem nulla dolorem</h3>

              <div class="meta d-flex align-items-center">
                <div class="d-flex align-items-center">
                  <i class="bi bi-person"></i> <span class="ps-2">Julia Parker</span>
                </div>
                <span class="px-3 text-black-50">/</span>
                <div class="d-flex align-items-center">
                  <i class="bi bi-folder2"></i> <span class="ps-2">Economics</span>
                </div>
              </div>

              <p>
                Incidunt voluptate sit temporibus aperiam. Quia vitae aut sint ullam quis illum voluptatum et. Quo libero rerum voluptatem pariatur nam.
              </p>

              <hr />

              <a href="/about/blog/blog-details.html" class="readmore stretched-link"><span>Read More</span><i class="bi bi-arrow-right"></i></a>

            </div>

          </div>
        </div>{/* End post list item */}

      </div>{/* End blog posts list */}

      <div class="blog-pagination">
        <ul class="justify-content-center">
          <li><a href="/">1</a></li>
          <li class="active"><a href="/">2</a></li>
          <li><a href="/">3</a></li>
        </ul>
      </div>{/* End blog pagination */}

    </div>
  </section>{/* End Blog Section */} 
</main>
     

     <Footer />
    </div>
  );

}

export default Blog
