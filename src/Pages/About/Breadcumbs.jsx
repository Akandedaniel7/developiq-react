import React from 'react';
import '../../Components/General.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'boxicons/css/boxicons.min.css';

const Breadcumbs = () => {
  return (
    <div>
    <div className="breadcrumbs-1 d-flex align-items-center">
    <div className="container position-relative d-flex flex-column align-items-center" data-aos="fade">

      <h2>About</h2>
      <ol>
        <li><a href="index.html">Home</a></li>
        <li>About</li>
      </ol>

    </div>
  </div>
    </div>
  );
}

export default Breadcumbs;
