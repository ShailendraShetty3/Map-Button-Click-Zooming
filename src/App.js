import {React, useState} from 'react';
import{BrowserRouter, Routes, Route, Outlet} from 'react-router-dom';
import Home from './Home';
import "leaflet/dist/leaflet.css";




function App(){
  
  return(
    <>
      <BrowserRouter>
        <Routes>
        <Route exact path="/" element={<Home />} />
        
        
        </Routes>
        
      </BrowserRouter>
    </>
  )
}

export default App;