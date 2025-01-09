import React, { useState } from "react";
import logo_c from "../utils/Images/logo_c.png";


const HeaderComponent = () => {
  const [BtnNameReact,setBtnNameReact] = useState("Login")
  console.log("Header Rendered")
    return (
      <div className="header">
        <div className="logo-container">
          <img className="logo" src={logo_c} alt="Logo" />
        </div>
        <div className="navItems">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Menu</li>
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