import MenuCard from "./MenuCard"
// import menuList from "../utils/mockData";
import {useState, useEffect} from "react";
import Shimmer from "./Shimmer";

const BodyComponent = () => {
  const [itemsList, setitemsList] = useState([]); // itemsList has a copy of all the restaurants 
  const [filteredRestaurant, setFilteredRestaurant] = useState([])  // filteresRestaurant has a copy of filteredRestaurants
  const [searchText, setSearchText] = useState("");
  console.log("Body Rendered")
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async() => {
    const data = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    console.log(json);
    setitemsList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants) //This is optional chaining
    setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  };


  //Conditional Rendering-Rendiering on the basis of condition
  // if(itemsList.length === 0){
  //   return <Shimmer />
  // }

  //returning based on ternary operator
  return itemsList.length === 0 ? <Shimmer /> : (
    <div className="body">
      <div className="searchContainer">
        <input className="search" type="search" placeholder="search" 
        value={searchText} 
        onChange={(e)=>{
         setSearchText(e.target.value)
        }}></input>
        <button className="button" type="button" 
          onClick={()=>{
          const filteredRestaurant= itemsList.filter((item)=> item.info.name.toLowerCase().includes(searchText.toLowerCase())); 
          /* what is ahppening on the above line?
          - From all the restaurants list we are filtering those restaurants that mathces our searchText and we are updating those restaurants to the virtualDom(setFilteredRestaurant), so now setFilteredRestaurant has the filtered restaurants.
    
          */

          setFilteredRestaurant(filteredRestaurant);
        }}>Search</button>
      </div>
      <div className="mainHeading">
        <div className="filter">
          <button 
            className="filter-btn"
            onClick={() => {
              const filteredList = filteredRestaurant.filter(
                (item) => item.info.avgRating > 4.5
              );
              setFilteredRestaurant(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
        <h1>Classic Restaurants</h1>
      </div>
      <div className="card">
        {filteredRestaurant.map(restaurant => (
          <MenuCard menuData={restaurant} key={restaurant.info.id} />
        ))}
      </div>
    </div>
  );
};

export default BodyComponent;

// filteredRestaurant === "" ? <h1> Not found </h1> : setitemsList(filteredRestaurant)