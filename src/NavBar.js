import React,{ useContext, useState, useEffect } from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem,NavbarBrand } from "reactstrap";
import TokenContext from "./tokenContext";

function NavBar() {
  const {token} = useContext(TokenContext);



  const [user, setUser] = useState();

  
  useEffect(() => {

    setUser(localStorage.getItem('username'));
     

  
  },[user]);


  

  return (
    <div>
      <Navbar expand="md">
        <NavLink exact to="/" className="navbar-brand">
          Jobly
        </NavLink>

        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink to="/companies">Companies</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/jobs">Jobs</NavLink>
          </NavItem>


          { user === null || user ===""  ? <a></a> : 
          <NavItem>
            <NavLink to="/profile">Profile</NavLink>
          </NavItem>
          
          }

          { user ===  null || user ==="" ?
                    <NavItem>
                    <NavLink to="/login">Login</NavLink>
      
                  </NavItem>
          
          :
      
            <a></a>
          }


          { user === null  || user ==="" ? 
           
               
                <NavItem>
     
                  <NavLink to="/signup">Signup</NavLink>
                </NavItem>
              
         
            :

                <NavItem>
                <NavLink to="/logout">Logout</NavLink>
                </NavItem>

          }



        </Nav>
      </Navbar>
    </div>
  );
}

export default NavBar;
