import React, { useState } from "react";
import logo_c from "../utils/Images/logo_c.png";
import { Link } from "react-router";


const HeaderComponent = () => {
  const [BtnNameReact,setBtnNameReact] = useState("Login")
  console.log("Header Rendered")
    return (
      <div className="flex justify-between bg-orange-600 text-white" >
        <div className="w-36 m-4">
         <Link to="/"><img className="logo" src={logo_c} alt="Logo" /></Link> 
        </div>
        <div className="flex text-lg font-medium">
          <ul className="flex items-center m-4">
            <li className="px-4">
              <Link to ="/"> Home</Link>
              </li>
            <li className="px-4">
              <Link to = "/about">About Us</Link>
              </li>
            <li className="px-4">
              <Link to="/contact"> Contact</Link>
            </li>
            <li className="px-4">
              <Link to="/grocery"> Grocery</Link>
            </li>
            <li className="px-4">Cart</li>
            <button className=" px-6 p-1 bg-[#000000] text-white rounded-md shadow-lg" 
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