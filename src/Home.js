import { Route, Routes, BrowserRouter, Link } from "react-router-dom";
import React, { useState, useEffect, useContext } from "react";
import JoblyApi from "./api";
import TokenContext from "./tokenContext";
import { Button}  from "reactstrap";


function Home() {


    const [isLoading, setIsLoading] = useState(true);
    const [results, setResults] = useState();
    let {token} = useContext(TokenContext);

    const user = localStorage.getItem('username');
  
    useEffect(() => {
      async function loadHomePage() {
        setResults(await JoblyApi.getCompany(`hall-davis`));
        //console.log(results.handle);
        setIsLoading(false);
        console.log("Token: ", token);
        console.log(localStorage);
      }
  
     
  
  
      loadHomePage();
  
    },[]);
  
    if (isLoading) {
        return <p>Loading &hellip;</p>;
      }
  
  
    return (
      <div>
        
              {user != "" && user !=null ? (<h2>Welcome {user}</h2> ): (
                <div>
                    <h2>Please login or register to continue.</h2>
                      <div>
                      <Link to="/login">
                      <Button color="primary">Login</Button>
                      </Link>
                      </div>
                      <div>
                      <Link to="/signup">
                      <Button color="success">Register</Button>
                      </Link>
                      </div>
                </div>
              )}
                

       
      </div>
    );
  }




  export default Home;