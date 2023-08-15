import React from 'react';
import '../../../Components/General.css';
import { Link } from 'react-router-dom';

const Breadcumbs = () => {
  return (
    <div>
    <div className="breadcrumbs-1 d-flex align-items-center">
    <div className="container position-relative d-flex flex-column align-items-center" data-aos="fade">

      <h2>Branding and Publicity</h2>
      <ol>
        <li><Link to='/Service'>Service</Link></li>
        <li>Branding and Publicity</li>
      </ol>

    </div>
  </div>
    </div>
  )
}

export default Breadcumbs
