import { Route, Routes, BrowserRouter , useParams} from "react-router-dom";
import React, { useState, useEffect } from "react";
import JoblyApi from "./api";
import { Card, CardBody, CardTitle, CardText, ListGroup, ListGroupItem}  from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Company.css";



function Company() {


    const [isLoading, setIsLoading] = useState(true);
    const [results, setResults] = useState();
    const {handle} = useParams();

   

  
    useEffect(() => {
      async function loadHomePage() {
        setResults(await JoblyApi.getCompany(handle));
        
        setIsLoading(false);
       
      }
  
     
      
      
  
      
      loadHomePage();
  
    },[]);
  
    if (isLoading) {
        return <p>Loading &hellip;</p>;
      }
  
     
     
    return (
      
        <section>

        <Card>
            <CardBody>
                <CardTitle className="font-weight-bold text-center">
                  { }
                    {results.name}
                </CardTitle>

                    <CardText className="font-italic">

                      
                            <p>{results.description}</p>
                            <p>{results.numEmployees}</p>  
                            <img src={results.logoUrl}></img>
                        
                             
                        
                        
                    </CardText>
            
           


                
            </CardBody>
            </Card>

       
      </section>
    );
  }




  export default Company;