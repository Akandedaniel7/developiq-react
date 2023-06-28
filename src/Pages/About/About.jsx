import React from 'react';
import Header from '../../Components/Header/Navbar';
import Breadcumbs from './Breadcumbs';
import Details from './Details';
import Sections from './Sections';
import Section2 from './Section2';
import Team from './Team';
import Footer from '../../Components/Footer/Footer';

const About = () => {
  return (
    <div>
     <Header />
     <Breadcumbs />
     <Details />
     <Sections />
     <Section2 />
     <Team />
     <Footer />
    </div>
  )
}

export default About
