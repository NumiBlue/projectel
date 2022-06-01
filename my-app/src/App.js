import React from 'react';
import  Navbar  from "./components/Navbar";
import Hero from "./components/Hero";
import  Events   from "./components/Events";
import  Weather from "./components/Weather";
import  Footer  from "./components/Footer";
import FormSignup from './components/FormSignup';
import Login from './components/Login'
import CraftBeer from './components/CraftBeer';
import FarmToTable from './components/FarmToTable';
import FarmersMarkets from './components/FarmersMarkets';
import PetFriendly from './components/PetFriendly';
import LGBTQowned from './components/LGBTQowned';
import TacoTrucks from './components/TacoTrucks';
import Article1 from './components/Article1';
import Article2 from './components/Article2';
import Article3 from './components/Article3';
import FormSuccess from './components/FormSuccess';
import { Routes, Route, } from "react-router-dom";



function App () {

  return (
<>
<div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="weather" element={<Weather />}/>
        <Route path="events" element={<Events />} />
        <Route path="FormSignup" element={<FormSignup /> } />
        <Route path="FormSuccess" element={<FormSuccess />} />
        <Route path="login" element={<Login />} />
        <Route path="Craftbeer" element={<CraftBeer /> } />
        <Route path="FarmToTable" element={<FarmToTable />} />
        <Route path="FarmersMarkets" element={<FarmersMarkets />} />
        <Route path="PetFriendly" element={<PetFriendly />} />
        <Route path="LGBTQowned" element={<LGBTQowned /> } />
        <Route path="TacoTrucks" element={<TacoTrucks />} />
        <Route path="Article1" element={<Article1 />} />
        <Route path="Article2" element={<Article2 />} />
        <Route path="Article3" element={<Article3 />} />
      </Routes>
      <Footer />
    </div>

    {/* <div className='hidden'>
      <FormSignup />
      <Login />
      <FormSuccess />
      <CraftBeer />
      <FarmToTable />
      <FarmersMarkets />
      <PetFriendly />
      <LGBTQowned />
      <TacoTrucks />
      <Article1 />
      <Article2 />
      <Article3 />
    </div> */}
  </>
  
  );
}

export default App;
