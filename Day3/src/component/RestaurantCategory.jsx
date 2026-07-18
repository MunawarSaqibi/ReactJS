import React from "react";
import { useState } from "react";
import { DownIcon } from "../utils/constants";
import MenuItem from "./MenuItem";

const RestaurantCategory=({categoryInfo, order, setIndex})=>{
    
        const {title,itemCards}=categoryInfo;
        
        let isOpen = order;

        function toggleBody(){
            setIndex()
        }
    return (
        <div className="category-accordian">
            <div className="category-header" onClick={toggleBody}>
            <span> {title}({itemCards.length})</span>
            <span>🔻</span>
            </div>

            {isOpen?(
                 <div className="category-body">
                {itemCards.map((singleMenu)=>{
                    return (
                        <MenuItem details={singleMenu.card.info}
                        key={singleMenu.card.info.id} />
                    )
                })}
            </div>
            ):(
                <div></div>
            )}
           
        </div>


    )
}

export default RestaurantCategory