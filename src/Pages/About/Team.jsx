import React from 'react';
import '../../Components/General.css';
import './Team.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'boxicons/css/boxicons.min.css';
import { FaFacebook, FaInstagramSquare, FaInvision, FaTwitterSquare  } from "react-icons/fa";
import Team1 from '../../asstes/Team/team_1.jpg';
import Team2 from '../../asstes/Team/team_2.jpg';
import Team3 from '../../asstes/Team/team_3.jpg';
import Team4 from '../../asstes/Team/team_4.jpg';
import Team5 from '../../asstes/Team/team_5.jpg';
import Team6 from '../../asstes/Team/team_6.jpg';
import Team7 from '../../asstes/Team/team_7.jpg';

const Team = () => {
  return (
    <div>
    <section id="team" class="team section-bg">
      <div class="container">

        <div class="section-title" data-aos="fade-up">
          <h2>Team</h2>
          <p>Meet DevelopIQ executive team.</p>
          <p> The faces behind the keyboard</p>
        </div>

        <div class="row">

          <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div class="member" data-aos="fade-up" data-aos-delay="100">
              <div class="member-img">
                <img src={ Team1 } class="img-fluid" alt="Team" />
                <div class="social">
                  <a href="https://twitter.com/DanielAkande13" target="_blank" rel="noopener noreferrer"><FaTwitterSquare /></a>
                  <a href="https://web.facebook.com/profile.php?id=100088311934393" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
                  <a href="https://www.linkedin.com/in/daniel-akande-818b74249/" target="_blank" rel="noopener noreferrer"><FaInstagramSquare /></a>
                  <a href="https://www.linkedin.com/in/daniel-akande-818b74249/" target="_blank" rel="noopener noreferrer"><FaInvision /></a>
                </div>
              </div>
              <div class="member-info">
                <h4>Daniel Akande</h4>
                <span>Founder and CEO</span>
              </div>
            </div>
          </div>

          <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div class="member" data-aos="fade-up" data-aos-delay="200">
              <div class="member-img">
                <img src={ Team6 } class="img-fluid" alt="Team" />
                <div class="social">
                  <a href="https://twitter.com/AbioyeDaniel05" target="_blank" rel="noopener noreferrer"><FaTwitterSquare /></a>
                  <a href="https://www.linkedin.com/in/daniel-abioye/" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
                  <a href="https://www.linkedin.com/in/daniel-abioye/" target="_blank" rel="noopener noreferrer"><FaInstagramSquare /></a>
                  <a href="https://www.linkedin.com/in/daniel-abioye/" target="_blank" rel="noopener noreferrer"><FaInvision /></a>
                </div>
              </div>
              <div class="member-info">
                <h4>Daniel Abioye</h4>
                <span>Project Development Lead</span>
              </div>
            </div>
          </div>

          <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div class="member" data-aos="fade-up" data-aos-delay="300">
              <div class="member-img">
                <img src={ Team4 } class="img-fluid" alt="Team" />
                <div class="social">
                  <a href="https://www.facebook.com/elizabeth.akande.75" target="_blank" rel="noopener noreferrer"><FaTwitterSquare /></a>
                  <a href="https://www.facebook.com/elizabeth.akande.75" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
                  <a href="https://www.likedin.com/in/elizabeth-akande" target="_blank" rel="noopener noreferrer"><FaInstagramSquare /></a>
                  <a href="https://www.likedin.com/in/elizabeth-akande" target="_blank" rel="noopener noreferrer"><FaInvision /></a>
                </div>
              </div>
              <div class="member-info">
                <h4>Elizabeth Bukola</h4>
                <span>Sales & Marketing Lead</span>
              </div>
            </div>
          </div>

          <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div class="member" data-aos="fade-up" data-aos-delay="400">
              <div class="member-img">
                <img src={ Team3 } class="img-fluid" alt="Team" />
                <div class="social">
                  <a href="https://m.facebook.com/isaac.akande.503" target="_blank" rel="noopener noreferrer"><FaTwitterSquare /></a>
                  <a href="https://m.facebook.com/isaac.akande.503" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
                  <a href="https://www.linkedin.com/in/isaac-akande-261a5b196" target="_blank" rel="noopener noreferrer"><FaInstagramSquare /></a>
                  <a href="https://www.linkedin.com/in/isaac-akande-261a5b196" target="_blank" rel="noopener noreferrer"><FaInvision /></a>
                </div>
              </div>
              <div class="member-info">
                <h4>Isaac Bolaji</h4>
                <span>Chief Financial Officer (CFO)</span>
              </div>
            </div>
            
          </div>

          <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div class="member" data-aos="fade-up" data-aos-delay="400">
              <div class="member-img">
                <img src={Team7 } class="img-fluid" alt="Team" />
                <div class="social">
                  <a href="https://twitter.com/ajilore_daniel1" target="_blank" rel="noopener noreferrer"><FaTwitterSquare /></a>
                  <a href="https://instagram.com/ajiloredaniel_?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
                  <a href="https://instagram.com/ajiloredaniel_?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D" target="_blank" rel="noopener noreferrer"><FaInstagramSquare /></a>
                  <a href="https://twitter.com/ajilore_daniel1" target="_blank" rel="noopener noreferrer"><FaInvision /></a>
                </div>
              </div>
              <div class="member-info">
                <h4>Ajilore Daniel</h4>
                <span>Lead Frontend Engineer</span>
              </div>
            </div>
            
          </div>

          <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div class="member" data-aos="fade-up" data-aos-delay="400">
              <div class="member-img">
                <img src={ Team2 } class="img-fluid" alt="Team" />
                <div class="social">
                  <a href="https://www.linkedin.com/in/peterakande" target="_blank" rel="noopener noreferrer"><FaTwitterSquare /></a>
                  <a href="https://www.linkedin.com/in/peterakande" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
                  <a href="https://www.linkedin.com/in/peterakande" target="_blank" rel="noopener noreferrer"><FaInstagramSquare /></a>
                  <a href="https://www.linkedin.com/in/peterakande" target="_blank" rel="noopener noreferrer"><FaInvision /></a>
                </div>
              </div>
              <div class="member-info">
                <h4>Peter Oluwatobi</h4>
                <span>Lead Back-End Engineer</span>
              </div>
            </div>

          </div>
          <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div class="member" data-aos="fade-up" data-aos-delay="400">
              <div class="member-img">
                <img src={Team5 } class="img-fluid" alt="Team" />
                <div class="social">
                  <a href="https://instagram.com/ens_man_360?igshid=ZGUzMzM3NWJiOQ==" target="_blank" rel="noopener noreferrer"><FaTwitterSquare /></a>
                  <a href="https://instagram.com/ens_man_360?igshid=ZGUzMzM3NWJiOQ==" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
                  <a href="https://instagram.com/ens_man_360?igshid=ZGUzMzM3NWJiOQ==" target="_blank" rel="noopener noreferrer"><FaInstagramSquare /></a>
                  <a href="https://instagram.com/ens_man_360?igshid=ZGUzMzM3NWJiOQ==" target="_blank" rel="noopener noreferrer"><FaInvision /></a>
                </div>
              </div>
              <div class="member-info">
                <h4>Eniola Badmus</h4>
                <span>Graphics Designer Lead</span>
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
