import React,{ useContext ,useEffect} from "react";
import {useNavigate} from "react-router-dom";
import TokenContext from "./tokenContext";



function Logout() {
    const {token,setToken} = useContext(TokenContext);

    const navigate = useNavigate();

    setToken("");
    useEffect(() => {
       

        localStorage.clear();
    
    
        navigate('/');

     

  
    },[]);
 




    return (
        <div></div>

    );



    
}


export default Logout;