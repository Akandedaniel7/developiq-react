import React,{useState} from 'react';
import Header from '../../Components/Header/Navbar';
import Footer from '../../Components/Footer/Footer';
import AllProject from './AllProject';
import WebDevelopment from './WebDevelopment';
import MobileApplicationDevelopment from './MobileApplicationDevelopment';
import BrandingandLogoDesign from './BrandingandLogoDesign';
import Maintenance from './Maintenance';
import '../../Components/General.css';
import '../../Styles/premium.css';

const categories=[
  {key:'All',label:'All projects',component:<AllProject/>},
  {key:'Web',label:'Web development',component:<WebDevelopment/>},
  {key:'Mobile',label:'Mobile apps',component:<MobileApplicationDevelopment/>},
  {key:'Branding',label:'Branding',component:<BrandingandLogoDesign/>},
  {key:'Maintenance',label:'Maintenance',component:<Maintenance/>}
];

const Portfolio=()=>{
  const [selected,setSelected]=useState('All');
  return (
    <div className="di-site">
      <Header/>
      <main className="di-page">
        <section className="di-portfolio-title">
          <div className="di-container">
            <span className="di-eyebrow">SELECTED WORK</span>
            <h1>Work shaped by real challenges.</h1>
            <p>A selection of development and design work. Featured projects demonstrate our experience; they are not automatically offered for licensing or resale.</p>
          </div>
        </section>
        <section id="portfolio" className="portfolio di-portfolio-body">
          <div className="di-container">
            <ul id="portfolio-flters" aria-label="Filter projects by type">
              {categories.map(c=><li key={c.key}>
                <button type="button" aria-pressed={selected===c.key} className={selected===c.key?'filter-active':''} onClick={()=>setSelected(c.key)}>{c.label}</button>
              </li>)}
            </ul>
            <div>{categories.find(c=>c.key===selected).component}</div>
          </div>
        </section>
      </main>
      <Footer/>
    </div>
  );
};
export default Portfolio;
