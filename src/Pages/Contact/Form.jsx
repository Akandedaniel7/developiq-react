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
          <form  className="php-email-form" method='POST'>
           {/* Name input field */}
<div className="form-group">
<input
  type="text"
  name="Name"
  value=''
  className="form-control"
  id="name"
  placeholder="Your Name"
  required
/>
</div>

{/* Email input field */}
<div className="form-group">
<input
  type="email"
  name="Email"
  value=''
  className="form-control"
  id="email"
  placeholder="Your Email"
  required
/>
</div>

{/* Subject input field */}
<div className="form-group">
<input
  type="text"
  name="Subject"
  value=''
  className="form-control"
  id="subject"
  placeholder="Subject"
  required
/>
</div>

{/* Message input field */}
<div className="form-group">
<textarea
  name="Message" 
  value=''
  className="form-control"
  rows="5"
  placeholder="Message"
  required
></textarea>
</div>

        { /*    <div className="my-3">
              <div className="loading">Loading</div>
              <div className="error-message"></div>
              <div className="sent-message">Your message has been sent. Thank you!</div>
            </div> */}
            <div className="text-center">
            <button type="submit">Send Message</button>
            </div>
          </form>
        </div>

      </div>

    </div>
  </section>
    </div>
  )
}

export default Form
