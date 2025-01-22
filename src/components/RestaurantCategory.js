import { useState } from "react";
import ItemsList from "./ItemsList";

const RestaurantCategory = ({data, showItems, setShowIndex}) =>{
// const [closeAccordion, setCloseAccordion] = useState(0);
    const handleClick =()=>{
    setShowIndex();
    }

    return(
        <div>
        <div className="w-7/12 bg-[#fefefe]  mx-auto my-5 p-4 shadow-xl">
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