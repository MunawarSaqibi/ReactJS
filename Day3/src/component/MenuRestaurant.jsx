import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { ImageBasicUrl, MenuAPI } from "../utils/constants";
import Body from "./Body";
import RestaurantInfoCard from "./RestaurantInfoCard.Jsx";
import RestaurantCategory from "./RestaurantCategory";
import MenuShimmer from "./MenuShimmer";
import useMenuRestaurant from "../utils/useMenuRestaurant";

const MenuRestaurant=()=>{
    
        const {resId}=useParams();

        const [showIndex,setShowIndex]=useState(null)
            
        const menu=useMenuRestaurant(resId)
        

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
                categories.map((category,index)=>{
                    console.log(category)
                    return(
                        <RestaurantCategory 
                        setIndex={
                            ()=>{
                                setShowIndex(index === showIndex ? null : index);
                            }
                        } 
                        order={
                            index === showIndex ? true:false
                        }
                        key={category.card.card.categoryId} categoryInfo={category.card.card} />
                    )

                })
            }
            </div>
        )
  
}

export default MenuRestaurant