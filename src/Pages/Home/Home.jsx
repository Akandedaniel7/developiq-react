import React from 'react';
import Header from '../../Components/Header/Navbar';
import Hero from './Hero';
import About from './About';
import Service from './Service';
import Testimonial from './Testimonial';
import Team from '../../Pages/About/Team';
import Footer from '../../Components/Footer/Footer';



const Home = () => {
    return(
        <div>
        <Header />
           <Hero />
           <About />
           <Service />
           <Testimonial />
           <Team />
          <Footer />
        </div>
    )
}

export default Home