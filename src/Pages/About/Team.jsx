import React from 'react';
import '../../Components/General.css';
import './Team.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'boxicons/css/boxicons.min.css';
import Team1 from '../../asstes/Team/me 1.jpg';
import Team2 from '../../asstes/Team/me 2.jpg';
import Team3 from '../../asstes/Team/me 3.jpg';
import Team4 from '../../asstes/Team/me 4.jpg';

const Team = () => {
  return (
    <div>
    <section id="team" className="team section-bg">
      <div className="container">

        <div className="section-title" data-aos="fade-up">
          <h2>Team</h2>
          <p>Meet DevelopIQ executive team.</p>
          <p> The faces behind the keyboard</p>
        </div>

        <div className="row">

          <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div className="member" data-aos="fade-up" data-aos-delay="100">
              <div className="member-img">
                <img src={Team1} className="img-fluid" alt="Team Member" />
                <div className="social">
                  <a href="/"><i className="bi bi-twitter"></i></a>
                  <a href="https://web.facebook.com/profile.php?id=100092447312103"><i className="bi bi-facebook"></i></a>
                  <a href="https://www.instagram.com/developiq_/"><i className="bi bi-instagram"></i></a>
                  <a href="https://www.linkedin.com/in/developiq-technology-50a536274/"><i className="bi bi-linkedin"></i></a>
                </div>
              </div>
              <div className="member-info">
                <h4>Daniel Akande</h4>
                <span>Chief Executive Officer</span>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div className="member" data-aos="fade-up" data-aos-delay="200">
              <div className="member-img">
                <img src={Team2} className="img-fluid" alt="Team Member" />
                <div className="social">
                  <a href="/"><i className="bi bi-twitter"></i></a>
                  <a href="/"><i className="bi bi-facebook"></i></a>
                  <a href="/"><i className="bi bi-instagram"></i></a>
                  <a href="/"><i className="bi bi-linkedin"></i></a>
                </div>
              </div>
              <div className="member-info">
                <h4>Daniel Akande</h4>
                <span>Product Manager</span>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div className="member" data-aos="fade-up" data-aos-delay="300">
              <div className="member-img">
                <img src={Team3} className="img-fluid" alt="Team Member" />
                <div className="social">
                  <a href="/"><i className="bi bi-twitter"></i></a>
                  <a href="/"><i className="bi bi-facebook"></i></a>
                  <a href="/"><i className="bi bi-instagram"></i></a>
                  <a href="/"><i className="bi bi-linkedin"></i></a>
                </div>
              </div>
              <div className="member-info">
                <h4>Daniel Akande</h4>
                <span>CTO</span>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div className="member" data-aos="fade-up" data-aos-delay="400">
              <div className="member-img">
                <img src={Team4} className="img-fluid" alt="Team Member" />
                <div className="social">
                  <a href="/"><i className="bi bi-twitter"></i></a>
                  <a href="/"><i className="bi bi-facebook"></i></a>
                  <a href="/"><i className="bi bi-instagram"></i></a>
                  <a href="/"><i className="bi bi-linkedin"></i></a>
                </div>
              </div>
              <div className="member-info">
                <h4>Daniel Akande</h4>
                <span>Accountant</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
    </div>
  )
}

export default Team
