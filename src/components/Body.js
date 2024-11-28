import MenuCard from "./MenuCard"
import  menuList  from "../utils/mockData";
import {useState, useEffect} from "react";


const BodyComponent = () =>{
    const [itemsList, setitemsList] = useState(menuList.feedItems)

    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = async()=>{
        const data = await fetch("https://www.ubereats.com/search?carid=eyJhbmFseXRpY3NMYWJlbCI6IkxMTV9DQVJPVVNFTF9FTlRJVFlfUkVDIiwiZW50aXR5IjoiQ2xhc3NpYyBBbWVyaWNhbnxsbG1fY2Fyb3VzZWwiLCJwbHVnaW4iOiJyZWNvbW1lbmRhdGlvbkZlZWRQbHVnaW4iLCJyZWNvbW1UeXBlIjoiZW50aXR5X3JlY29tbWVuZG")
        const json = await data.json
        console.log(json)
    }
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
                (item) => item.store.rating.text > 4 
            );
            setitemsList(filteredList);
            }}>Top Rated Stores</button>
            
        </div>
        <h1>Classic American Restaurants </h1>
       </div>
        <div className="card">
            {  
             itemsList.map(item => 
             <MenuCard menuData={item} key={item.uuid}/>)
            }
        </div>
        </div>
    )
}

export default BodyComponent;