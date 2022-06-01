import React from 'react';
import  Navbar  from "../components/Navbar";
import Hero  from "../components/Hero";
import  Events   from "../components/Events";
import  Weather from "../components/Weather";
import  Footer  from "../components/Footer";
import { Routes, Route, } from "react-router-dom";



function Home () {

  return (
<>
<div>
      <Navbar />
      <Routes>
        <Route path="hero" element={<Hero />} />
        <Route path="weather" element={<Weather />}/>
        <Route path="events" element={<Events />} />
      </Routes>
      <Footer />
    </div>
    </>
  
  );
}

export default Home;