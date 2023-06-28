import React from 'react';
import './footer.css';
import '../General.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'boxicons/css/boxicons.min.css';

const Footer = () => {
  return (
    <div>
    <footer className="w-100 py-4 flex-shrink-0">
    <div className="container py-4">
      
        <div className="row gy-4 gx-5">
            <div className="col-lg-4 col-md-6 linkAll-i linkAll">
                <h5 className="h1 text-white ">DevelopIQ</h5>
                <p className="small text-muted logoAll-group">Software Website...</p>
                <p className="small text-muted mb-0 linkAll">DevelopIQ is a Nigeria IT Brand of excellence that offers High quality and easy to use bespoke website,
                   software, digital marketing, branding, IT and associated services at affordable prices for business growth worldwide and profit
                    traction.</p>
            </div>
            <div className="col-lg-2 col-md-6 ">
                <h5 className="text-white mb-3">Useful links</h5>
                <ul className="list-unstyled text-muted linkAll">
                    <li><a href="/">Web Design</a></li>
                    <li><a href="/">Web Appilcation</a></li>
                    <li><a href="/">Graphics Design</a></li>
                    <li><a href="/">Plugin Development</a></li>
                    <li><a href="/">Marketing SEO</a></li>
                    <li><a href="/">Policy</a></li>
                    <li><a href="/">Terms</a></li>
                  
                </ul>
            </div>
            <div className="col-lg-2 col-md-6">
                <h5 className="text-white mb-3">Links</h5>
                <ul className="list-unstyled text-muted linkAll">
                    <li><a href="/index.html">Home</a></li>
                    <li><a href="/about.html">About</a></li>
                    <li><a href="/service.html">Services</a></li>
                    <li><a href="/portfolio.html">Portfolio</a></li>
                    <li><a href="/">Team</a></li>
                </ul>
            </div>
            <div className="col-lg-4 col-md-6 linkAll">
                <h5 className="text-white mb-3">Newsletter</h5>
                <p className="small text-muted linkAll">Subscribe to get Latest Technology and Business News, Offer and connect With Us.</p>
                <form action="#">
                    <div className="input-group mb-3">
                        <input className="form-control" type="text" placeholder="Enter Your Email" aria-label="Recipient's username" aria-describedby="button-addon2" />
                        <button className="btn btn-primary buttonAll" id="button-addon2" type="button"><i className="fas fa-paper-plane"></i></button>
                    </div>
                </form>
            </div>
        </div>
    </div>
     <div className="copyright">
      Copyright © 2021 DevelopIQ. All rights reserved  
    </div>
</footer>
    </div>
  )
}

export default Footer
