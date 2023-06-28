import logo from './logo.svg';
import './App.css';
//import NavBar from "./NavBar";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Home from "./Home";

function App() {



  return (
    <div className="App">
      <BrowserRouter>
        
        <main>
          <Routes>
            <Route exact path="/" element = {<Home/>}/>
           
             
         


          </Routes>
        </main>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
