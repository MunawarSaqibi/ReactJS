import { ImageBasicUrl } from "../utils/constants";
const RestaurantInfoCard=({menu})=>{
    const menuInfo = menu?.data?.cards?.[2]?.card?.card?.info;
        if (!menuInfo) {
            return <div>Menu data unavailable</div>
        }
     const {
            name,
            avgRatingString,
            totalRatingsString,
            cuisines,
            cloudinaryImageId,
            costfortwo
        } = menuInfo;

    return ( <div>
        <div className="menu-div">
                <div className="menu-inner-div" >
                    <div className="Restaurant-title">{name}</div>
                <div >
                    <img className="menu-img" src={`${ImageBasicUrl}${cloudinaryImageId}`} alt="" />
                </div>
                <div className="menu-rating">⭐{avgRatingString}({totalRatingsString})</div>
                <div className="menu-cuisine">{cuisines?.join(", ")}</div>
            </div>
    </div>
    </div>
    )
         
    
}

export default RestaurantInfoCard