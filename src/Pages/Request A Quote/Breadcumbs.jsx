import React from 'react';
import { Link } from 'react-router-dom';
import '../../Components/General.css';

const Breadcumbs = () => {
  return (
    <div>
    <div className="breadcrumbs-1 d-flex align-items-center">
    <div className="container position-relative d-flex flex-column align-items-center" data-aos="fade">

      <h2>Get A Quote</h2>
      <ol>
        <li><Link to="/">Home</Link></li>
        <li>Get A Quote</li>
      </ol>

    </div>
  </div>
    </div>
  )
}

export default Breadcumbs
