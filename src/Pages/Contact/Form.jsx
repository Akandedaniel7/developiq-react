import React  from 'react';
import '../../Components/General.css';
import './contact.css';
import { BiLogoFacebookCircle, BiLogoLinkedinSquare, BiLogoInstagram, BiLogoTwitter } from "react-icons/bi";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'boxicons/css/boxicons.min.css';

const Form = () => {
  
  return (
    <div>
    <section id="contact" className="contact">
    <div className="container">

      <div className="section-title" data-aos="fade-up">
        <h2>Contact Us</h2>
      </div>

      <div className="row">

        <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
          <div className="contact-about">
            <h3>DevelopIQ</h3>
            <p>
              Doing business with us is the best choice you can make, we are expert in what we do. We never stop mastering
               our craft. Get In touch with us now.
            </p>
            <div className="social-links">
              <a href="/" className="twitter"><i className="bi bi-twitter"><BiLogoTwitter size='24px'/></i></a>
              <a href="/" className="facebook"><i className="bi bi-facebook"><BiLogoFacebookCircle size='24px'/></i></a>
              <a href="/" className="instagram"><i className="bi bi-instagram"><BiLogoInstagram size='24px'/></i></a>
              <a href="/" className="linkedin"><i className="bi bi-linkedin"><BiLogoLinkedinSquare size='24px'/></i></a>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 mt-4 mt-md-0" data-aos="fade-up" data-aos-delay="200">
          <div className="info">
            <div>
              <i className="ri-map-pin-line"></i>
              <p>113, ekoro road, capental bustop, abulegba lagos</p>
            </div>

            <div>
              <i className="ri-mail-send-line"></i>
              <p>developiq01@gmail.com</p>
            </div>

            <div>
              <i className="ri-phone-line"></i>
              <p>+234 814 9823761</p>
            </div>

          </div>
        </div>

        <div className="col-lg-5 col-md-12" data-aos="fade-up" data-aos-delay="300">
          <div className="p-4" style={{border: '1px solid #e1eaf5', borderRadius: 12, background: '#f8fbff'}}>
            <h4>Start a conversation</h4>
            <p>Whether you need a custom application, a white-label license or a technology partnership, email our team with a short description of your requirements.</p>
            <a className="btn btn-primary" href="mailto:developiq01@gmail.com?subject=Develop-IQ%20Business%20Inquiry">Email Develop-IQ Technologies</a>
          </div>
        </div>

      </div>

    </div>
  </section>
    </div>
  )
}

export default Form
