import { useState } from "react";
import ItemsList from "./ItemsList";

const RestaurantCategory = ({data}) =>{
    const [showItems, setShowItems]= useState(false);

    const handleClick =()=>{
    setShowItems(!showItems);
    }

    return(
        <div>
        <div className="w-6/12 bg-[#fefefe]  mx-auto my-5 p-4 shadow-xl">
            <div onClick={handleClick} className="font-bold flex justify-between cursor-pointer">
            <span >{data.title} ({data.itemCards.length})</span>
            <span className="font-extrabold">⌄</span>
            </div>

            {showItems && <ItemsList items={data.itemCards}/>}
            </div>
        </div>
    )
}

export default RestaurantCategory;