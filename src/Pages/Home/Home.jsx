import React from 'react';
import Header from '../../Components/Header/Navbar';
import Footer from '../../Components/Footer/Footer';
import '../../Styles/premium.css';
import './onepage.css';

const projects = [
  {name:'Vacua',category:'Student accommodation',subtitle:'A digital platform for finding student housing.',domain:'vacuastudents.com',url:'https://www.vacuastudents.com/',theme:'vacua',monogram:'V',number:'01'},
  {name:'Mimi’s Kitchen',category:'Food & commerce',subtitle:'A digital experience for a UK-based Nigerian food brand.',domain:'mimiskitchenuk.com',url:'https://mimiskitchenuk.com/',theme:'mimi',monogram:'M',number:'02'},
  {name:'CliqSeed',category:'B2B commerce',subtitle:'A commerce-focused digital product experience.',domain:'cliqseed.com',url:'https://www.cliqseed.com/en',theme:'cliq',monogram:'C',number:'03'},
  {name:'DFAB Consulting Group',category:'Financial services',subtitle:'A digital presence for a business and financial consulting group.',domain:'dfabconsultinggroup.com',url:'https://www.dfabconsultinggroup.com/',theme:'dfab',monogram:'D',number:'04'},
  {name:'Dr. Awosanya Yusuff',category:'Professional portfolio',subtitle:'An editorial digital home for a finance professional, author and speaker.',domain:'drawosanyayusuff.com',url:'https://www.drawosanyayusuff.com/',theme:'awosanya',monogram:'AY',number:'05'},
  {name:'Daytopia Group',category:'Mentorship & community',subtitle:'A digital platform supporting professional connection and mentorship.',domain:'daytopiagroup.com',url:'https://www.daytopiagroup.com/',theme:'daytopia',monogram:'D',number:'06'}
];

const Arrow = () => <span aria-hidden="true">↗</span>;

const Home = () => (
  <div className="di-site di-onepage">
    <Header />
    <main id="top">
      <section className="di-hero" aria-labelledby="home-title">
        <div className="di-container di-hero-inner">
          <div className="di-hero-content">
            <span className="di-hero-badge">Independent software engineering studio</span>
            <h1 id="home-title">Software built with <span>clarity, craft & purpose.</span></h1>
            <p className="di-hero-summary">We design and develop digital products for ambitious businesses — and connect organizations with eligible, ready-built software and engineering partnerships.</p>
            <div className="di-hero-actions">
              <a className="di-button di-button--primary" href="#work">Explore our work <Arrow /></a>
              <a className="di-button di-button--outline" href="#contact">Start a conversation <Arrow /></a>
            </div>
            <div className="di-hero-meta">
              <span>Based in Nigeria</span><span>Web & mobile products</span><span>Worldwide collaboration</span>
            </div>
          </div>
          <div className="di-showcase" aria-hidden="true">
            <div className="di-showcase-shadow"/>
            <div className="di-showcase-window">
              <div className="di-showcase-top"><span className="di-window-dots"><i/><i/><i/></span><span>DEVELOP-IQ / ENGINEERING</span></div>
              <div className="di-showcase-body">
                <div className="di-showcase-kicker">Software / Products / Partnerships</div>
                <h2 className="di-showcase-title">From your big idea to a product people use.</h2>
                <div className="di-showcase-divider"/>
                <div className="di-showcase-row"><span className="di-showcase-icon">01</span>Digital product development<small>BUILD</small></div>
                <div className="di-showcase-row"><span className="di-showcase-icon">02</span>Software asset licensing<small>LICENSE</small></div>
                <div className="di-showcase-row"><span className="di-showcase-icon">03</span>Engineering partnerships<small>GROW</small></div>
              </div>
            </div>
            <div className="di-floating-chip">Technology with <span>intention ↗</span></div>
          </div>
        </div>
      </section>

      <div className="di-intro-ribbon"><div className="di-container di-ribbon-inner"><span>Design with purpose</span><span>Engineer for scale</span><span>Deliver with care</span></div></div>

      <section id="about" className="di-section di-onepage-about">
        <div className="di-container di-split">
          <div>
            <span className="di-eyebrow">ABOUT THE STUDIO</span>
            <h2>Thoughtful engineering. Tangible outcomes.</h2>
            <p>Develop-IQ Technologies is a Nigeria-based software company delivering web, mobile and business applications. We're a focused six-person team combining product thinking with hands-on engineering.</p>
            <p>Our work spans new digital experiences, business systems and opportunities to put existing technology to work in new markets.</p>
            <a href="#contact" className="di-text-link">Get to know us through a conversation <Arrow /></a>
          </div>
          <div className="di-panel-visual" aria-label="Our approach to software development">
            <div className="di-panel-top">OUR PHILOSOPHY / DEVELOP-IQ</div>
            <div className="di-panel-code">
              <div><strong>01.</strong> Understand the challenge</div>
              <div><strong>02.</strong> Design for real people</div>
              <div><strong>03.</strong> Engineer with purpose</div>
              <div><strong>04.</strong> Deliver with clarity</div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="di-section di-section--muted">
        <div className="di-container">
          <div className="di-section-top">
            <div><span className="di-eyebrow">OUR EXPERTISE</span><h2 className="di-section-heading">Engineering that moves<br/>business forward.</h2></div>
            <p>From the experience customers see to the systems behind it, our team helps businesses turn complex requirements into useful products.</p>
          </div>
          <div className="di-cards">
            <article className="di-card"><span className="di-card-icon" aria-hidden="true">◇</span><span className="di-card-counter">01 / WEB</span><h3>Web applications</h3><p>Scalable websites, custom business platforms, dashboards and responsive web experiences.</p><a href="#contact">Discuss a web project <Arrow /></a></article>
            <article className="di-card"><span className="di-card-icon" aria-hidden="true">▣</span><span className="di-card-counter">02 / MOBILE</span><h3>Mobile products</h3><p>Purpose-built mobile applications with thoughtful journeys, practical features and refined interfaces.</p><a href="#contact">Discuss a mobile app <Arrow /></a></article>
            <article className="di-card"><span className="di-card-icon" aria-hidden="true">↗</span><span className="di-card-counter">03 / BUSINESS</span><h3>Software solutions</h3><p>Operational systems, platform integrations and digital tools shaped around your business workflows.</p><a href="#contact">Discuss your requirements <Arrow /></a></article>
          </div>
        </div>
      </section>

      <section id="work" className="di-section di-work-section" aria-labelledby="work-heading">
        <div className="di-container">
          <div className="di-section-top">
            <div><span className="di-eyebrow">SELECTED WORK</span><h2 id="work-heading" className="di-section-heading">Products and experiences<br/>we've helped bring to life.</h2></div>
            <p>A selection of recent client-facing digital projects across different industries.</p>
          </div>
          <div className="di-work-grid">
            {projects.map(p=>(
              <article key={p.name} className="di-work-card">
                <a href={p.url} target="_blank" rel="noopener noreferrer" className={`di-work-preview di-work-preview--${p.theme}`} aria-label={`Visit ${p.name} website`}>
                  <div className="di-work-browser"><span className="di-work-browser-dots"><i/><i/><i/></span><span>{p.domain}</span></div>
                  <div className="di-work-art">
                    <div className="di-work-monogram">{p.monogram}</div>
                    <strong>{p.name}</strong>
                    <span>{p.category}</span>
                  </div>
                  <div className="di-work-decoration" aria-hidden="true"/>
                </a>
                <div className="di-work-info">
                  <div><span className="di-work-type">{p.category}</span><h3>{p.name}</h3><p>{p.subtitle}</p></div>
                  <a href={p.url} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${p.name} live website`} className="di-work-visit"><Arrow /></a>
                </div>
              </article>
            ))}
          </div>
          <p className="di-work-disclaimer">These projects are showcased as client and portfolio work, not as software offered for resale. The graphic previews are illustrative, not screenshots of the live websites.</p>
        </div>
      </section>

      <section id="licensing" className="di-section di-section--muted">
        <div className="di-container di-split">
          <div className="di-panel-visual di-panel-licensing" aria-hidden="true">
            <div className="di-panel-top">READY-BUILT / TECHNOLOGY ASSETS</div>
            <div className="di-panel-code">
              <div><strong>01.</strong> Identify eligible software</div>
              <div><strong>02.</strong> Review commercial fit</div>
              <div><strong>03.</strong> Agree scope and rights</div>
              <div><strong>04.</strong> License or transfer</div>
            </div>
          </div>
          <div>
            <span className="di-eyebrow">SOFTWARE LICENSING</span>
            <h2>Not every product needs to start from zero.</h2>
            <p>Alongside our custom engineering work, we're exploring commercial licensing and acquisitions for selected company-owned applications and technology assets.</p>
            <ul className="di-simple-list">
              <li>White-label software licensing</li>
              <li>Selected software asset acquisitions</li>
              <li>Customization and deployment support</li>
            </ul>
            <p className="di-legal-note">Availability and terms are confirmed individually after ownership, rights and technical review.</p>
            <a href="mailto:developiq01@gmail.com?subject=Software%20Licensing%20Inquiry" className="di-button di-button--outline">Inquire about software <Arrow /></a>
          </div>
        </div>
      </section>

      <section id="partnerships" className="di-section" aria-labelledby="partnership-heading">
        <div className="di-container">
          <div className="di-section-intro"><span className="di-eyebrow">TECHNOLOGY PARTNERSHIPS</span><h2 id="partnership-heading">Building alongside the people shaping what's next.</h2><p>We explore engineering collaborations, permitted proprietary codebase licensing and carefully scoped AI research or evaluation opportunities.</p></div>
          <div className="di-steps">
            <div className="di-step"><span className="di-step-number">01 / COLLABORATE</span><h3>Product engineering</h3><p>Hands-on software development partnerships for organizations creating or extending digital products.</p></div>
            <div className="di-step"><span className="di-step-number">02 / LICENSE</span><h3>Eligible technical assets</h3><p>Commercial conversations involving verified company-owned codebases, engineering histories and documentation.</p></div>
            <div className="di-step"><span className="di-step-number">03 / EVALUATE</span><h3>AI and research workflows</h3><p>Potential collaborations on realistic software workflows and evaluation environments, subject to appropriate agreements.</p></div>
          </div>
          <p className="di-legal-note di-partnership-note">No confidential client data, private repositories or proprietary records are shared without adequate rights and safeguards.</p>
        </div>
      </section>

      <section id="contact" className="di-cta-wrap">
        <div className="di-container">
          <div className="di-cta">
            <div><span className="di-eyebrow di-eyebrow--light">LET'S TALK</span><h2>Have a project, a partnership or an idea in mind?</h2><p>Tell us what you're building or exploring. Your message goes directly to our team.</p><a className="di-contact-email" href="mailto:developiq01@gmail.com">developiq01@gmail.com</a></div>
            <a className="di-button di-button--white" href="mailto:developiq01@gmail.com?subject=Develop-IQ%20Business%20Inquiry">Send us an email <Arrow /></a>
          </div>
        </div>
      </section>
    </main>
    <Footer/>
  </div>
);
export default Home;
