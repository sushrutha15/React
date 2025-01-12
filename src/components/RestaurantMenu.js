import { useState, useEffect} from "react";
import Shimmer from "./Shimmer";
import { MENU_API } from "../utils/constants";
import { useParams } from "react-router";

const RestaurantMenu = () =>{
    const[resInfo, setResInfo] = useState(null);
    const {resID} = useParams();
    console.log(resID);
    console.log(useState())

    useEffect(()=>{
        fetchMenu();
    },[])

    const fetchMenu = async () =>{
        const data = await fetch(MENU_API+resID);
        const json = await data.json();
        console.log(json);
        setResInfo(json.data);
    };

    if (resInfo === null)
        return <Shimmer/>

    const {name, cuisines, costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info ;
    const {itemCards}= resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card ;

    return (
        <div>
            <h1>{name}</h1>
            <h3>{cuisines?.join(", ")}</h3>
            <h3>{costForTwoMessage}</h3>
            <h2>Menu</h2>
            <ul>
                {itemCards.map((item) => (
                    <li key={item.card.info.id}>
                        {item.card.info.name} - {"$"}{item.card.info.price/100 || item.card.info.defaultPrice/100}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default RestaurantMenu;
