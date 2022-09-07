import React from "react";
import reactLogo from "../images/logo192.png"

export default function Navbar() {
    return(
        
            <nav className="navbar">
              <div className="logo-hr">
              <img src={reactLogo} alt="React logo" className="nav-logo"/>
              <h2>ReactFacts</h2>  
              </div> 
              
              <h3>React Course - Project 1</h3>
            </nav>
        )
    }