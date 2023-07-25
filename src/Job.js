import { Route, Routes, BrowserRouter , useParams, Link} from "react-router-dom";
import { Card, CardBody, CardTitle, CardText, ListGroup, ListGroupItem}  from "reactstrap";
import React, { useState, useEffect } from "react";
import JoblyApi from "./api";


function Job() {


    const [isLoading, setIsLoading] = useState(true);
    const [results, setResults] = useState();
    const {id} = useParams();

  
    useEffect(() => {
      async function loadJobPage() {
        setResults(await JoblyApi.getJob(id));
        
        setIsLoading(false);
      }
  
     
      console.log(results);
  
  
      loadJobPage();
  
    },[]);
  
    if (isLoading) {
        return <p>Loading &hellip;</p>;
      }
  
  
    return (
      <div>

            <section>

           

            <Card>
                <CardBody>
                    <CardTitle className="font-weight-bold text-center">
                        {results.job.title}
                    </CardTitle>

                        <CardText className="font-italic">

                        
                         
                       
                        
                            <p>{results.job.salary}</p>
                            <p>{results.job.equity}</p>
                            
                            <Link to={`/company/${results.job.company.handle}`} >
                                    {results.job.company.name}
                            </Link>
                                                
                            
                            
                        </CardText>
                



                    
                </CardBody>
                </Card>

            

            </section>

        
      


       
      </div>
    );
  }




  export default Job;