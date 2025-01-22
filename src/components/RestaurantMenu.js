import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useParams } from "react-router";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () =>{
    
    const {resID} = useParams();
    const resInfo = useRestaurantMenu(resID);
    const [showIndex, setShowIndex] = useState(null);

    if (resInfo === null)
        return <Shimmer/>

    const {name, cuisines, costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info ;
    const {itemCards}= resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card ;
    console.log(resInfo);

    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
        c => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

    console.log(categories);
    

    return (
        <div className="m-4 px-4 text-center">
            <h1 className="font-bold text-3xl ">{name}</h1>
            <div className="border border-[#bcbcbc] w-3/12 m-auto my-2 shadow-md flex justify-between items-center px-4">
            <h3 className="font-medium p-2">{cuisines?.join(", ")}</h3>
            <h3 className="font-medium">{costForTwoMessage}</h3>
            </div>
            <h2 className="py-4 font-bold text-2xl">Menu</h2>
            {/* <ul>
                {itemCards.map((item) => (
                    <li key={item.card.info.id}>
                        {item.card.info.name} - {"$"}{item.card.info.price/100 || item.card.info.defaultPrice/100}
                    </li>
                ))}
            </ul> */}
            {categories.map((category, index)=>(
                // Controlled component
                <RestaurantCategory key ={category.card.card.title} 
                data ={category.card.card} 
                showItems={index === showIndex} // Check if this is the active tab
                setShowIndex={() =>
                    setShowIndex(index === showIndex ? null : index) // Toggle the tab on click
                }
               />
            ))}
        </div>
    )
}

export default RestaurantMenu;

// if 
