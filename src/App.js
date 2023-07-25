import logo from './logo.svg';
import './App.css';
import NavBar from "./NavBar";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Home from "./Home";
import Companies from "./Companies";
import Company from "./Company";
import Jobs from "./Jobs";
import Job from "./Job";
import Profile from "./Profile";
import Register from "./Register";
import Login from "./Login";
import Logout from "./Logout";
import JoblyApi from "./api";
import TokenContext from "./tokenContext";
import UserContext from "./userContext";
import { useLocalStorage } from './useLocalStorage';

function App() {

  //const [isLoading, setIsLoading] = useState(true);
  const [results, setResults] = useState("");
  const [token, setToken] = useState("");
  const [user, setUser] = useState("");
  const [value, setValue] = useLocalStorage('username', '');
  


  async function register(newUser) {
    setToken(await JoblyApi.register(newUser));
    setUser(newUser.username);
    setValue(newUser.username);
 
  };



  async function login(user) {
    setToken(await JoblyApi.login(user));
    setUser(user.username);
    setValue(user.username);
  };






    useEffect(() => {


      
     

  
     },[]);
  





  return (
    <div className="App">
      <TokenContext.Provider value={{token, setToken}}>
      <UserContext.Provider value={{user, setUser}}>
      <BrowserRouter>
        
        <main>
        <NavBar />
          <Routes>
          
            <Route exact="true" path="/" element = {<Home/>}/>
            <Route exact="true" path="/companies" element = {<Companies/>}/>
            <Route exact="true" path="/company/:handle" element = {<Company/>}/>
            <Route exact="true" path="/jobs" element = {<Jobs/>}/>
            <Route exact="true" path="/jobs/:id" element = {<Job/>}/>
            <Route exact="true" path="/signup" element = {<Register register = {register}/>}/>
            <Route exact="true" path="/login" element = {<Login login = {login}/>}/>
            <Route exact="true" path="/logout" element = {<Logout/>}/>
            <Route exact="true" path="/profile" element = {<Profile/>}/>
           
             
         


          </Routes>
        </main>
      </BrowserRouter>
      </UserContext.Provider>
      </TokenContext.Provider>
     
    </div>
  );
}

export default App;
