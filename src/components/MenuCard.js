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

export default MenuCard;