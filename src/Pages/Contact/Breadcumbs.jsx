import React from 'react';
import { Link } from 'react-router-dom';

const Breadcumbs = () => {
  return (
    <div>
    <div className="breadcrumbs-1 d-flex align-items-center">
    <div className="container position-relative d-flex flex-column align-items-center" data-aos="fade">

      <h2>Contact</h2>
      <ol>
        <li><Link to="/">Home</Link></li>
        <li>Contact</li>
      </ol>

    </div>
  </div>
    </div>
  )
}

export default Breadcumbs;
