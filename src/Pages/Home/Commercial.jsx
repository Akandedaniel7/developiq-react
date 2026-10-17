import React from 'react';
import { Link } from 'react-router-dom';
import '../../Styles/premium.css';

const paths = [
  {icon:'◇',number:'01 / ENGINEER',title:'Custom software development',desc:'Thoughtfully designed web applications, mobile experiences and operational software tailored to your requirements.',to:'/Service',cta:'Explore our services'},
  {icon:'▣',number:'02 / LICENSE',title:'Software licensing & acquisition',desc:'Explore eligible company-owned products available for white-label licensing or discuss a tailored asset acquisition.',to:'/SoftwareLicensing',cta:'Explore licensing'},
  {icon:'↗',number:'03 / PARTNER',title:'Technical & AI partnerships',desc:'Collaborate with our team on software engineering and responsibly scoped proprietary technology or evaluation opportunities.',to:'/TechnologyPartnerships',cta:'Explore partnerships'}
];

const Commercial = () => (
  <>
    <div className="di-intro-ribbon" aria-label="Develop-IQ capabilities">
      <div className="di-container di-ribbon-inner">
        <span>Product engineering</span><span>Software assets</span><span>Technical partnerships</span>
      </div>
    </div>
    <section className="di-section" aria-labelledby="di-ways-heading">
      <div className="di-container">
        <div className="di-section-top">
          <div>
            <span className="di-eyebrow">WHAT WE DO</span>
            <h2 id="di-ways-heading" className="di-section-heading">Technology for the <br/>next move.</h2>
          </div>
          <p>Not every business needs to start at zero. We provide engineering expertise and explore commercially available technology to help bring the right solution to life.</p>
        </div>
        <div className="di-cards">
          {paths.map(path => (
            <article className="di-card" key={path.number}>
              <span className="di-card-icon" aria-hidden="true">{path.icon}</span>
              <span className="di-card-counter">{path.number}</span>
              <h3>{path.title}</h3>
              <p>{path.desc}</p>
              <Link to={path.to}>{path.cta} <span className="di-arrow" aria-hidden="true">↗</span></Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  </>
);
export default Commercial;
