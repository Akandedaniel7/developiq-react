import React from 'react';
import './footer.css';
import '../General.css';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'boxicons/css/boxicons.min.css';

const Footer = () => {
  return (
    <div>
    <footer class="w-100 py-4 flex-shrink-0">
    <div class="container py-4">
      
        <div class="row gy-4 gx-5">
            <div class="col-lg-4 col-md-6 linkAll-i linkAll">
                <h5 class="h1 text-white ">DevelopIQ</h5>
                <p class="small text-muted logoAll-group">Software Website...</p>
                <p class="small text-muted mb-0 linkAll">DevelopIQ is a Nigeria IT Brand of excellence that offers High quality and easy to use bespoke website,
                   software, digital marketing, branding, IT and associated services at affordable prices for business growth worldwide and profit
                    traction.</p>
            </div>
          
            <div class="col-lg-2 col-md-6">
                <h5 class="text-white mb-3">Useful Links</h5>
                <ul class="list-unstyled text-muted linkAll">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/About">About</Link></li>
                    <li><Link to="/Service">Services</Link></li>
                    <li><Link to="/Portfolio">Portfolio</Link></li>
                    <li><Link to="/Contact">Contact</Link></li>
                    <li><Link to="/Quote">Request  A Quote</Link></li>
                </ul>
            </div>

            <div class="col-lg-2 col-md-6 ">
              <h5 class="text-white mb-3">Services</h5>
              <ul class="list-unstyled text-muted linkAll">
                  <li><a href="/service/web design.html">Web Design</a></li>
                  <li><a href="/web development.html">Web Appilcation</a></li>
                  <li><a href="/service/Graphics Design.html">Graphics Design</a></li>
                  <li><a href="/Plugin Development.html">Plugin Development</a></li>
                  <li><a href="/Marketing SEO.html">Marketing SEO</a></li>
                  <li><a href="/Policy.html">Policy</a></li>
                  <li><a href="/Terms and Condition.html">Terms</a></li>
                
              </ul>
          </div>
            
            <div class="col-lg-4 col-md-6 linkAll">
                <h5 class="text-white mb-3">Newsletter</h5>
                <p class="small text-muted linkAll">Subscribe to get Latest Technology and Business News, Offer and connect With Us.</p>
                <form action="#">
                    <div class="input-group mb-3">
                        <input class="form-control" type="text" placeholder="Enter Your Email" aria-label="Recipient's username" aria-describedby="button-addon2" />
                        <button class="btn btn-primary buttonAll" id="button-addon2" type="button"><i class="fas fa-paper-plane"></i></button>
                    </div>
                </form>
            </div>
        </div>
    </div>
     <div class="copyright">
      Copyright © 2023 DevelopIQ. All rights reserved  
    </div>
</footer>
    </div>
  )
}

export default Footer
