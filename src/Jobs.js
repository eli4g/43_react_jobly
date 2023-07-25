import { Route, Routes, BrowserRouter,Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import JoblyApi from "./api";
import Company from './Company.js';
import { Card, CardBody, CardTitle, CardText, ListGroup, ListGroupItem}  from "reactstrap";


function Jobs() {


    const [isLoading, setIsLoading] = useState(true);
    const [results, setResults] = useState();
  
    useEffect(() => {
      async function loadJobsPage() {
        setResults(await JoblyApi.getJobs());
        
        setIsLoading(false);
      }
  
     
  
  
      loadJobsPage();
  
    },[]);
  
    if (isLoading) {
        return <p>Loading &hellip;</p>;
      }

 
  
  
    return (
      <div>
        
   


              <section>

              {results.jobs.map(jobs => (
                <Card>
                    <CardBody>
                        <CardTitle className="font-weight-bold text-center">
                            <Link to={`/jobs/${jobs.id}`} >
                                {jobs.title}
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




  export default Jobs;