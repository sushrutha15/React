import MenuCard from "./MenuCard"
import  menuList  from "../utils/mockData";
import {useState} from "react";


const BodyComponent = () =>{
    const [itemsList, setitemsList] = useState(menuList)
    return(
        <div className="body">
            <div className="searchContainer">
            <input className="search" type="search" placeholder="search" ></input>
            <button className="button" type="button">Search</button>
            </div>
       <div className="mainHeading">
        <div className="filter">
            <button className="filter-btn"
            onClick={()=>{
            const filteredList = itemsList.filter(
                (itm) => itm.rating > 4 
            );
            setitemsList(filteredList);
            }}>Top Rated Items</button>
            
        </div>
        <h1>Featured Items</h1>
       </div>
        <div className="card">
            {  
             itemsList.map(item => <MenuCard menuData={item}/>)
            }
        </div>
        </div>
    )
}

export default BodyComponent;