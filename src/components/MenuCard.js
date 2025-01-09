const MenuCard = (props) => {
    const { menuData } = props;
  
    return (
      <div className="cardContainer">
        <img
          className="cardImages"
          src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${menuData.info.cloudinaryImageId}`}
        />
        <h3 className="cardText">{menuData.info.name}</h3>
        <p className="cardText">Rating: {menuData.info.avgRating}</p>
        <button className="cardButton" type="button">
          Add
        </button>
      </div>
    );
  };
  
  export default MenuCard;