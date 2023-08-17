import React from 'react';
import Header from '../../Components/Header/Navbar';
import '../../Components/General.css';
import Footer from '../../Components/Footer/Footer';
import { Link } from 'react-router-dom';
import error404 from '../../asstes/404.png';
import oops from '../../asstes/oops.png';
import './error.css';

const error = () => {
  return (
    <div>
    <Header />
    <div class="breadcrumbs-1 d-flex align-items-center">
    <div class="container position-relative d-flex flex-column align-items-center" data-aos="fade">

      <h2>404 Not Found</h2>
      <ol>
        <li><Link to='/'>Home</Link></li>
        <li>404 Page</li>
      </ol>

    </div>
  </div>

  <main id="main">
    <section id="404page">
        <div class="container">
            <div class="pageflex">
                <div class="pageflex-i">
                  <img src={error404 } alt="404" />
                </div>
            
                <div class="pagefle-ii">
                   <img src={ oops } alt="Oops!" />
                   <h3>YOU'RE LOST...</h3>
                   <p>THE PAGE YOU ARE LOOKING FOR MIGHT HAVE BEEN MOVED, RENAMED, OR MIGHT NEVER EXISTED.</p>
                   <Link to="/">Back Home</Link>
                </div>
            </div>
        </div>
    </section>
  </main>
  <Footer />
    </div>
  )
}

export default error


