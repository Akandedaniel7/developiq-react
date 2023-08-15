import React from 'react';
import { Link } from 'react-router-dom';

const Breadcumbs = () => {
  return (
    <div class="breadcrumbs-1 d-flex align-items-center">
     <div class="container position-relative d-flex flex-column align-items-center" data-aos="fade">
 
       <h2>Portfolio</h2>
       <ol>
         <li><Link to="/">Home</Link></li>
         <li>Portfolio</li>
       </ol>
 
     </div>
    </div>
  )
}

export default Breadcumbs
