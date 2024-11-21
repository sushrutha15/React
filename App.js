import React from "react";
import ReactDOM from "react-dom/client"
import logo from "./Images/svm_logo.png"
import c1 from "./Images/c1.png";
import c2 from "./Images/c2.png";
import c3 from "./Images/c3.png";
import c4 from "./Images/c4.png";
import c6 from "./Images/c6.png";
import c7 from "./Images/c7.png";


const HeaderComponent = () => {
    return (
      <div className="header">
        <div className="logo-container">
          <img className="logo" src={logo} alt="Logo" />
        </div>
        <div className="navItems">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Menu</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    )
}

const MenuCard = (props) => {
    const {menuData} = props;
return(
    <div className="cardContainer">
        <img className="cardImages" src={menuData.image} alt="Chilli Panner" />
    <h3 className="cardText">{menuData.itemName}</h3>
    <p className="cardText">Rating: {menuData.rating}</p>
    <button className="cardButton" type="button">Add</button>
    </div>
)
}

const menuList = [
    { 
        key:"1",
        index:"1",
        itemName: "Chilli Paneer",
        rating: "4.4",
        image: c1,
    },{
        key:"2",
        index:"2",
        itemName: "chicken Pakoda",
        rating: "4.6",
        image:c2,
    },
    {
        key:"3",
        index:"3",
        itemName: "Platter",
        rating: "4.8",
        image:c3,
    },
    {
        key:"4",
        index:"4",
        itemName: "Chilli Chicken",
        rating: "4.7",
        image:c4,
    },{
        key:"5",
        index:"5",
        itemName: "Chicken TIkka",
        rating: "4.5",
        image:c6,
    },{
        key:"6",
        index:"6",
        itemName: "Chicken Drumstricks served with fries",
        rating: "4.8",
        image:c7,
    }
];

const BodyComponent = () =>{
    return(
        <div className="body">
            <div className="searchContainer">
            <input className="search" type="search" placeholder="search" ></input>
            <button className="button" type="button">Search</button>
            </div>
       <div className="mainHeading">
        <h1>Featured Items</h1>
       </div>
        <div className="card">
            {  
             menuList.map(item => <MenuCard menuData={item}/>)
            }
     
        </div>
        </div>
    )
}

const FooterComponent =() =>{
return(
    <div className="footerContainer">
       <div className="footerlogoContainer">
          <img className="logo" src={logo} alt="Logo" />
        </div>
        <div className="copyrights">
          <h3>copyrights reserved By@SriVari Mithai </h3>
          <p> ENR Square, Opp: SBI Hydershakote, Suncity Rd,<br/>
              Hyderabad, Telangana 500086, India</p>
        </div>

    </div>
)
}
const AppLayout = () => {
    return (
        <div className="app">
        <HeaderComponent/>,
        <BodyComponent />,
        <FooterComponent />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<AppLayout />)
