import { useState,useEffect } from "react";
import { MenuAPI } from "./constants";
const useMenuRestaurant=(resId)=>{
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
        return menu
}

export default useMenuRestaurant

