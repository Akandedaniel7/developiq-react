import React from 'react';
import WebDevelopment from './WebDevelopment';
import MobileApplicationDevelopment from './MobileApplicationDevelopment';
import BrandingandLogoDesign from './BrandingandLogoDesign';
import Maintenance from './Maintenance';

const AllProject = () => {
  return(
    <div>
    <h1>All Projects</h1>
    <WebDevelopment />
    <MobileApplicationDevelopment />
    <BrandingandLogoDesign />
    <Maintenance />
    </div>
  )
}

export default AllProject
