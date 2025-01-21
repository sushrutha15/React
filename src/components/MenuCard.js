const MenuCard = (props) => {
    const { menuData } = props;
  
    return (
      <div className="m-8 p-4 w-[300px] bg-[#f4f4f4 hover:bg-[#eaeaea] rounded-md justify-center text-center shadow-md">
        <img
         className="w-[250px]rounded-md flex-wrap rounded-md w-[350px] h-[300px]"
          src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${menuData.info.cloudinaryImageId}`}
        />
        <h3 className="m-2 text-center font-bold">{menuData.info.name}</h3>
        <p className="m-2 p-2">Rating: {menuData.info.avgRating}</p>
        <button className="ml-4 bg-[#6E260E] px-4 text-white p-1 rounded-md shadow-md" type="button">
          Add
        </button>
      </div>
    );
  };
  

  export const WithPromotedLabel =(MenuCard) => {
    return (props)=>{
      return (
        <div>
          <label>Promoted</label>
          <MenuCard {...props}/>
        </div>
      )
    }
  }
  
  export default MenuCard;