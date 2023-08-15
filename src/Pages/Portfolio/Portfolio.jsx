import React, {useState } from 'react';
import '../../Components/General.css';
import Header from '../../Components/Header/Navbar';
import Footer from '../../Components/Footer/Footer';
import Breadcumbs from './Breadcumbs'
import AllProject from './AllProject';
import WebDevelopment from './WebDevelopment';
import MobileApplicationDevelopment from './MobileApplicationDevelopment';
import BrandingandLogoDesign from './BrandingandLogoDesign';
import Maintenance from './Maintenance';

const Portfolio = () => {
    const categories = [
        'All',
        'Web Development',
        'Mobile Application Development',
        'Branding and Logo Design',
        'Maintenance'
    ];

     const [selectedCategory, setSelectedCategory] = useState('All');

     const handleCategoryClick = (category) => {
      setSelectedCategory(category);
     };

  return (
    <div>
    <Header />
    <Breadcumbs />
    <section id="portfolio" class="portfolio">
    <div className="container">

      <div className="section-title" data-aos="fade-up">
        <h2>Portfolio</h2>
        <p>Advancing Innovation through Web, Desktop, and Mobile Application Development.</p>
      </div>
    
      <div className="portfolio"> {/* Add the portfolio class */}
      <ul id="portfolio-flters" className="button-container"> {/* Use the button-container class */}
        {categories.map((category) => (
          <li
            key={category}
            onClick={() => handleCategoryClick(category)}
            className={selectedCategory === category ? 'filter-active' : ''}
          >
            {category}
          </li>
        ))}
      </ul>

  <div>
  {selectedCategory === 'All' && <AllProject />}
  {selectedCategory === 'Web Development' && <WebDevelopment />}
  {selectedCategory === 'Mobile Application Development' && <MobileApplicationDevelopment />}
  {selectedCategory === 'Branding and Logo Design' && <BrandingandLogoDesign />}
  {selectedCategory === 'Maintenance' && <Maintenance />}
 
  </div>
  </div>
  </div>
  </section>
  <Footer />
  </div>
  )
}

export default Portfolio
