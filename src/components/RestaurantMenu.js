import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useParams } from "react-router";

const RestaurantMenu = () =>{
    
    const {resID} = useParams();
    const resInfo = useRestaurantMenu(resID);

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
