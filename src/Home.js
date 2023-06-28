import { Route, Routes, BrowserRouter } from "react-router-dom";
import React, { useState, useEffect } from "react";
import JoblyApi from "./api";


function Home() {


  
    let results = '';
  
    useEffect(() => {
      async function loadHomePage() {
        results =   await JoblyApi.getCompany(`hall-davis`);
        
      }
  
      console.log(results);
  
  
      loadHomePage();
  
    });
  
  
  
    return (
      <div>
        
                <p>{results}</p>

       
      </div>
    );
  }




  export default Home;