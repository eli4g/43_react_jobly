import { Route, Routes, BrowserRouter , useParams, useNavigate} from "react-router-dom";
import React, { useState, useEffect } from "react";
import JoblyApi from "./api";
import { Card, CardBody, CardTitle, CardText, ListGroup, ListGroupItem,Button, Form, FormGroup, Label, Input, FormText, Col, Row}  from "reactstrap";

import 'bootstrap/dist/css/bootstrap.min.css';
import "./Login.css";



function Login({login}) {


    const INITIAL_STATE = {
        username: '',
        password: ''
        
      }
      const [formData, setFormData] = useState(INITIAL_STATE);
      const navigate = useNavigate();
    
      // Handle changes to the fields on the form, by adding the data to state
      const handleChange = (e) => {
    
        const { name, value } = e.target;
        setFormData(formData => ({
          ...formData,
          [name]: value
        }))
      }
    
    
      // Handle the form submission
      const handleSubmit = async (e) => {
        e.preventDefault();
       
       await login({ ...formData });
        setFormData(INITIAL_STATE)
        navigate('/');
      }
  
    // if (isLoading) {
    //     return <p>Loading &hellip;</p>;
    //   }
  
  
    return (
        <div>
          <h1>Login</h1>


    <div> 
      <Card>     
    <Form onSubmit={handleSubmit} className = "text-center" >
      
      <Row>
      <FormGroup row>
            <Label htmlFor="username" sm={2}>User Name</Label>
            <Col sm={8}>
                <Input
                id="username"
                type="text"
                name="username"
                placeholder="username"
                value={formData.username}
                onChange={handleChange}
                />
            </Col>
        </FormGroup>

        </Row>
        <Row>
        <FormGroup row>
       
            <Label htmlFor="password"  sm={2}>Password</Label>
            <Col sm={8}>
            <Input
            id="password"
            type="password"
            name="password"
            placeholder="password"
            value={formData.password}
            onChange={handleChange}
            />
            </Col>
        </FormGroup>
        </Row>
       
        <Row>
        <FormGroup>
        
        <Button>Login</Button>
        </FormGroup>
        </Row>

      </Form>
      </Card>
      </div>
      </div>
    );
  }




  export default Login;