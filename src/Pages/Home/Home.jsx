import React from 'react';
import Header from '../../Components/Header/Navbar';
import MobileNav from '../../Components/Header/MobileNav';
import Hero from './Hero';
import About from './About';
import Counts from './Counts';
import Service from './Service';
import Testimonial from './Testimonial';
import Team from '../../Pages/About/Team';
import Footer from '../../Components/Footer/Footer';



const Home = () => {
    return(
        <div>
           <Hero />
           <About />
           <Counts />
           <Service />
           <Testimonial />
           <Team />
          <Footer />
        </div>
    )
}

export default Home