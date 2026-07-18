import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { ImageBasicUrl, MenuAPI } from "../utils/constants";
import Body from "./Body";
import RestaurantInfoCard from "./RestaurantInfoCard.Jsx";
import RestaurantCategory from "./RestaurantCategory";
import MenuShimmer from "./MenuShimmer";

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
            return <div>
                <MenuShimmer/>
            </div>
        }

        const categories=menu?.data?.cards[5]?.groupedCard.cardGroupMap?.REGULAR?.cards.filter(
            (category)=>{
                if(
                    category?.card?.card?.["@type"]===
                    "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
                ){
                    return true;
                }else{
                    return false;
                }
            },
    
        );

        console.log(categories)
        

       
        return (
           
            <div className="menuRestaurantDiv">    
            <div>
                <RestaurantInfoCard menu={menu}/>
            </div>

            {
                categories.map((category)=>{
                    console.log(category)
                    return(
                        <RestaurantCategory key={category.card.card.categoryId} categoryInfo={category.card.card} />
                    )

                })
            }
            </div>
        )
  
}

export default MenuRestaurant