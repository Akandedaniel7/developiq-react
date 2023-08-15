import React from 'react';
import { Link } from 'react-router-dom';
import '../../../Components/General.css';
import '../service.css';

const Breadcumbs = () => {
  return (
    <div>
    <div className="breadcrumbs-1 d-flex align-items-center">
    <div className="container position-relative d-flex flex-column align-items-center" data-aos="fade">

      <h2>Mobile Application Development</h2>
      <ol>
        <li><Link to="/Service">Service</Link></li>
        <li>Mobile Application Development</li>
      </ol>

    </div>
  </div>
    </div>
  )
}

export default Breadcumbs
