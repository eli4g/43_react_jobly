import { Route, Routes, BrowserRouter , useParams, useNavigate} from "react-router-dom";
import React, { useState, useEffect } from "react";
import JoblyApi from "./api";
import { Card, CardBody, CardTitle, CardText, ListGroup, ListGroupItem,Button, Form, FormGroup, Label, Input, FormText, Col,Row}  from "reactstrap";

import 'bootstrap/dist/css/bootstrap.min.css';
import "./Register.css";



function Register({register}) {


    const INITIAL_STATE = {
        username: '',
        password: '',
        firstName: '',
        lastName: '',
        email: ''
        
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
       console.log("inside form:", formData);
       await register({ ...formData });
        setFormData(INITIAL_STATE)
        navigate('/');
      }
  
    // if (isLoading) {
    //     return <p>Loading &hellip;</p>;
    //   }
  
  
    return (
        <div>
          <h1>Register</h1>

        <Card>
    <Form onSubmit={handleSubmit}>
      

      <Row>
      <FormGroup row>
            <Label htmlFor="username" sm={3}>User Name</Label>
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
            <Label htmlFor="password" sm={3}>Password</Label>
            <Col sm={8}>
            <Input
            id="password"
            type="password"
            name="password"
            placeholder="password"
            value={formData.password}
            onChange={handleChange}
            /></Col>
        </FormGroup>
        </Row>
        <Row>
      <FormGroup row>
            <Label htmlFor="firstName" sm={3}>First Name</Label>
            <Col sm={8}>
            <Input
            id="firstName"
            type="text"
            name="firstName"
            placeholder="firstName"
            value={formData.firstName}
            onChange={handleChange}
            /></Col>
           </FormGroup>
           </Row>
          <Row>
          <FormGroup row>

            <Label htmlFor="lastName" sm={3}>Last Name</Label>
            <Col sm={8}>
            <Input
            id="lastName"
            type="text"
            name="lastName"
            placeholder="lastName"
            value={formData.lastName}
            onChange={handleChange}
            /></Col>
        </FormGroup>
        </Row>
        <Row>
      <FormGroup row>
            
            <Label htmlFor="email" sm={3}>Email</Label>
            <Col sm={8}>
            <Input
            id="email"
            type="text"
            name="email"
            placeholder="email"
            value={formData.email}
            onChange={handleChange}
            /></Col>
        </FormGroup>
        </Row>
       
        <FormGroup >
        
        <Button>Register</Button>
        </FormGroup>


      </Form>
      </Card>
      </div>
    );
  }




  export default Register;