import React from 'react';
import Header from '../../../Components/Header/Navbar';
import Breadcumbs from './Breadcumbs';
import Categories from './Categories';
import Footer from '../../../Components/Footer/Footer';

const MobileApplication = () => {
  return (
    <div>
    <Header />
     <Breadcumbs />
     <Categories />
     <Footer />
    </div>
  )
}

export default MobileApplication
