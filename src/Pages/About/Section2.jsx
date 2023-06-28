import React from 'react';
import '../../Components/General.css';
import './about.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'boxicons/css/boxicons.min.css';
import MoreService1 from '../../asstes/more-services-1.jpg';
import MoreService2 from '../../asstes/more-services-1.jpg';
import MoreService3 from '../../asstes/more-services-1.jpg';

const Section2 = () => {
  return (
    <div>
    <section id="more-services" className="more-services">
    <div className="container">

      <div className="row">
        <div className="col-md-6 d-flex align-items-stretch">
          <div className="card" style={{ backgroundImage: `url(${MoreService1})` }} data-aos="fade-up" data-aos-delay="100">
            <div className="card-body">
              <h5 className="card-title"><a href="/">Mission</a></h5>
              <p className="card-text">
                To develop Information Technology systems that will ease business processes and social lif while promoting
                the business.
              </p>
             
            </div>
          </div>
        </div>
        <div className="col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
          <div className="card" style={{ backgroundImage: `url(${MoreService2})` }} data-aos="fade-up" data-aos-delay="200">
            <div className="card-body">
              <h5 className="card-title"><a href="/">Vision</a></h5>
              <p className="card-text">
                To become a unique, secure and reliable Information Technology Company and develop innovation that make life easy
              </p>
              
            </div>
          </div>

        </div>
        
        <div className="col-md-6 d-flex align-items-stretch mt-4">
          <div className="card" style={{ backgroundImage: `url(${MoreService3})` }} data-aos="fade-up" data-aos-delay="200">
            <div className="card-body">
              <h5 className="card-title"><a href="/">Goal</a></h5>
              <p className="card-text">
                Help businesses achive goals. Develop effective innovations using morden approaches.
                Increase business leads.
              </p>
            
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
    </div>
  )
}

export default Section2
