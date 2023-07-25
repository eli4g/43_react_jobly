import { Route, Routes, BrowserRouter , useParams} from "react-router-dom";
import React, { useState, useEffect,useContext } from "react";
import JoblyApi from "./api";
import { Card, CardBody, CardTitle, CardText, ListGroup, ListGroupItem}  from "reactstrap";
import TokenContext from "./tokenContext";
import 'bootstrap/dist/css/bootstrap.min.css';




function Profile() {


    const [isLoading, setIsLoading] = useState(true);
    const [results, setResults] = useState();
   

    const {user,token} = useContext(TokenContext);

  
    useEffect(() => {
      async function loadProfilePage() {
        setResults(await JoblyApi.getUser(user,token));
        
        setIsLoading(false);
      }
  
     
  
  
      loadProfilePage();
  
    },[]);
  
    if (isLoading) {
        return <p>Loading &hellip;</p>;
      }
  
  
    return (
        <section>

        <Card>
            <CardBody>
                <CardTitle className="font-weight-bold text-center">
                    {results.username}
                </CardTitle>

                    <CardText className="font-italic">

                      
                            <p>{results.firstName}</p>
                            <p>{results.lastName}</p>  
                            <img src={results.email}></img>
                        
                             
                        
                        
                    </CardText>
            
           


                
            </CardBody>
            </Card>

       
      </section>
    );
  }




  export default Profile;