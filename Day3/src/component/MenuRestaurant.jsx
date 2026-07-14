import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { MenuAPI } from "../utils/constants";
import Body from "./Body";

const MenuRestaurant=()=>{
    
        const {resId}=useParams();
            

        const[menu,setMenu]=useState(null);

        useEffect(()=>{
            getRestaurantMenu();
        },[])

        const getRestaurantMenu = async () => {
          const rawData = await fetch(MenuAPI + resId);
          const json = await rawData.json();
          console.log(json)
          setMenu(json)
        }

        if (menu == null) {
            return <div>Shimmer</div>
        }

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
        } = menuInfo;

        return (
            <div>
                <h1>{name}</h1>
                <div>{avgRatingString}</div>
            </div>
        )
  
}

export default MenuRestaurant