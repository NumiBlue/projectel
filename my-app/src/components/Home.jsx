import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
// import Weather from './Weather';
import Footer from './Footer';
import Events from './Events';


function Home () {
  return (
    
    <div>
      <Navbar />
      <Hero />
      {/* <Weather /> */}
      <Events />
      <Footer />
    </div>
    
  )
}

export default Home