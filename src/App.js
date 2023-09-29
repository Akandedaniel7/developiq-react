import React from 'react';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Service from './Pages/Service/Service';
import Portfolio from './Pages/Portfolio/Portfolio';
import Contact from './Pages/Contact/Contact';
import Quote from './Pages/Request A Quote/Quote';
import { Routes, Route } from 'react-router-dom';
import WebDevelopment from './Pages/Service/Web Development/WebDevelopment';
import BrandingandPublicity from './Pages/Service/Branding and Publicity/BrandingandPublicity';
import WebDesign from './Pages/Service/Web Development/WebDesign';
import Ecommerce from './Pages/Service/Web Development/Ecommerce';
import Entertainment from './Pages/Service/Web Development/Entertainment';
import Education from './Pages/Service/Web Development/Education';
import SocialAndDating from './Pages/Service/Web Development/SocialAndDating';
import Custom from './Pages/Service/Web Development/Custom';
import MobileApplication from './Pages/Service/Mobile Application Development/MobileApplication';
import Publication from './Pages/Service/Branding and Publicity/Publication';
import UserInteface from './Pages/Service/Branding and Publicity/UserInteface';
import LogoAndIdentity from './Pages/Service/Branding and Publicity/LogoAndIdentity';
import MobileApp from './Pages/Service/Mobile Application Development/MobileApp';
import EcomerceApp from './Pages/Service/Mobile Application Development/EcomerceApp';
import BusinessApp from './Pages/Service/Mobile Application Development/BusinessApp';
import EntertainmentApp from './Pages/Service/Mobile Application Development/EntertainmentApp';
import EducationalApp from './Pages/Service/Mobile Application Development/EducationalApp';
import FAQ from './Pages/About/FAQ';
import Error from './Pages/Error/Error';
import Blog from './Pages/About/Blog';
import Carrer from './Pages/About/Carrer';
import News from './Pages/About/News';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const App = () => {
  return (
    <div>
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Service' element={<Service />} />
        <Route path='/Portfolio' element={<Portfolio />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Quote' element={<Quote />} /> 
        <Route path='/WebDevelopment' element={<WebDevelopment />} />
        <Route path='/BrandingandPublicity' element={<BrandingandPublicity />} />
        <Route path='/WebDesign' element={<WebDesign />} />
        <Route path='/Ecommerce' element={<Ecommerce />} />
        <Route path='/Entertainment' element={<Entertainment />} />
        <Route path='/Education' element={<Education />} />
        <Route path='/SocialAndDating' element={<SocialAndDating />} />
        <Route path='/custom' element={<Custom />} />
        <Route path='/MobileApplication' element={<MobileApplication />} />
        <Route path='/LogoAndIdentity' element={<LogoAndIdentity />} />
        <Route path='/UserInterface' element={<UserInteface />} />
        <Route path='/Publication' element={<Publication />} />
        <Route path='/EducationalApp' element={<EducationalApp />} />
        <Route path='/EntertainmentApp' element={<EntertainmentApp />} />
        <Route path='/BusinessApp' element={<BusinessApp />} />
        <Route path='/MobileApp' element={<MobileApp />} />
        <Route path='/EcommerceApp' element={<EcomerceApp />} />
        <Route path='/FAQ' element={<FAQ />} />
        <Route path='/Blog' element={<Blog />} />
        <Route path='/Carrer' element={<Carrer />} />
        <Route path='/Error' element={<Error />} />
        <Route path='/News' element={<News />} />
    </Routes>
    {/* WhatsApp icon */}
    <a
    href="https://wa.me/2348100000000"
    class="whatsapp_float"
    target="_blank"
    rel="noopener noreferrer"
  >
    <i class="fa fa-whatsapp whatsapp-icon"></i>
  </a>
    </div>
  );
}

export default App;
