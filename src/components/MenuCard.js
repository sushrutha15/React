const MenuCard = (props) => {
    const {menuData} = props;
return(
    <div className="cardContainer">
        <img className="cardImages" src={menuData.store.image.items[0].url} alt="Chilli Panner" />
    <h3 className="cardText">{menuData.store.title.text}</h3>
    <p className="cardText">Rating: {menuData.store.rating.text}</p>
    <button className="cardButton" type="button">Add</button>
    </div>
)
}

export default MenuCard;