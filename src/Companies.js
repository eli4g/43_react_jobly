import { Route, Routes, BrowserRouter,Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import JoblyApi from "./api";
import Company from './Company.js';
import { Card, CardBody, CardTitle, CardText, ListGroup, ListGroupItem}  from "reactstrap";


function Companies() {


    const [isLoading, setIsLoading] = useState(true);
  
    const [results, setResults] = useState();
  
    useEffect(() => {
      async function loadCompaniesPage() {
        setResults(await JoblyApi.getCompanies());
        
        setIsLoading(false);
      }
  

      console.log("localStorage username: ", localStorage.getItem('username'));
     
  
  
      loadCompaniesPage();
  
    },[]);
  
    if (isLoading) {
        return <p>Loading &hellip;</p>;
      }


    if(!localStorage.getItem('username'))
    {return (
          <div>

            
              <button>Please Login</button>

          </div>
    );}
 
  
  
    return (
      <div>
        
        
              

       
   


        <section>

        {results.companies.map(companies => (

        <Card>
            <CardBody>
                <CardTitle className="font-weight-bold text-center">
                    <Link to={`/company/${companies.handle}`} >
                        {companies.name}
                    </Link>
                </CardTitle>

                    <CardText className="font-italic">

                    

                        
                            
                        
                        
                    </CardText>
            
        


                
            </CardBody>
            </Card>

            ))}

        </section>

        </div>



    );
  }




  export default Companies;