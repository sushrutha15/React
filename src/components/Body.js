import MenuCard from "./MenuCard";
// import menuList from "../utils/mockData";
import {useState, useEffect} from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";

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

  const onlineStatus = useOnlineStatus();
  if(onlineStatus === false)
    return(
       <h1 className="m-6 p-2 border-black font-medium"> Looks like you are offline, Please check your internet connection.</h1>
      )
  
  //Conditional Rendering-Rendiering on the basis of condition
  // if(itemsList.length === 0){
  //   return <Shimmer />
  // }

  //returning based on ternary operator
  return itemsList.length === 0 ? <Shimmer /> : (
    <div className="body">
      <div className="justify-center text-center">
        <input className="border border-solid border-black px-44 p-1 m-5 rounded-md shadow-md" type="Search" placeholder="search" 
        value={searchText} 
        onChange={(e)=>{
         setSearchText(e.target.value)
        }}></input>
        <button className="px-4 ml-5 bg-green-700 text-white rounded-md p-1 shadow-lg" type="button" 
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
            className="m-6 px-4 p-[1.5] bg-blue-100 shadow-md rounded-md border-black"
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
        <h1 className="m-6 px-4 p-[1.5] font-bold ">Classic Restaurants</h1>
      </div>
      <div className="flex flex-wrap justify-center">
        {filteredRestaurant.map(restaurant => (
         <Link key={restaurant.info.id}  
         to={"/restaurants/"+restaurant.info.id} className="linkModification"> 
         <MenuCard menuData={restaurant} />
         </Link>
        ))}
      </div>
    </div>
  );
};

export default BodyComponent;

// filteredRestaurant === "" ? <h1> Not found </h1> : setitemsList(filteredRestaurant)