import {ITEMS_CDN_URL } from "../utils/constants";

const ItemsList =({items})=>{
    return(
        <div>
            {items.map((item)=>(
                <div key={item.card.info.id} className="border-b-2 p-4 m-2 flex justify-between ">
                    <div className="w-9/12">
                    <div className="font-bold text-left py-2">
                        <span>{item.card.info.name}</span>
                        <span>- ₹{ item.card.info.price ? item.card.info.price/100 : item.card.info.defaultPrice/100}</span>
                    </div>
                    <div>
                    <p className="text-xs text-left">{item.card.info.description}</p>
                    </div>
                    </div>
                    <div className="w-3/12 justify-between ml-9 px-2">
                    <div className="absolute">
                    <button className="shadow-lg font-bold my-16 mx-16 p-1 px-2 bg-[#fafafa] text-[#4b942a] rounded-lg"> ADD  </button>
                    </div>
                        <img className="w-full mx-6"src={ITEMS_CDN_URL + item.card.info.imageId} />
                    </div>
                </div>
               
            ))}
        </div>
    )
}

export default ItemsList;

