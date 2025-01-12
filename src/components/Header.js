import React, { useState } from "react";
import logo_c from "../utils/Images/logo_c.png";
import { Link } from "react-router";


const HeaderComponent = () => {
  const [BtnNameReact,setBtnNameReact] = useState("Login")
  console.log("Header Rendered")
    return (
      <div className="header" >
        <div className="logo-container">
         <Link to="/"><img className="logo" src={logo_c} alt="Logo" /></Link> 
        </div>
        <div className="navItems">
          <ul>
            <li>
              <Link to ="/"> Home</Link>
              </li>
            <li>
              <Link to = "/about">About Us</Link>
              </li>
            <li>
              <Link to="/contact"> Contact</Link>
            </li>
            <li>Cart</li>
            <button className="loginButton" 
              onClick={()=>{
              BtnNameReact ==="Login"? setBtnNameReact("Logout") : setBtnNameReact("Login");
            }}>{ BtnNameReact}
            </button>
          </ul>
        </div>
      </div>
    )
}

export default HeaderComponent;