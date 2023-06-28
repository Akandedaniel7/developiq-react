import React from 'react';
import Header from '../../../Components/Header/Navbar';
import Breadcumbs from './Breadcumbs';
import WebCategories from './WebCategories';
import Footer from '../../../Components/Footer/Footer';

const WebDevelopment = () => {
  return (
    <div>
    <Header />
      <Breadcumbs />
      <WebCategories />
      <Footer />
    </div>
  )
}

export default WebDevelopment;
