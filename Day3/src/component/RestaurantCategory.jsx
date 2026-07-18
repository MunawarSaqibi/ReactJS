import React from "react";
import { useState } from "react";
import { DownIcon } from "../utils/constants";
import MenuItem from "./MenuItem";

const RestaurantCategory=({categoryInfo})=>{
    
        const {title,itemCards}=categoryInfo;
        const [isOpen,setIsOpen]=useState(false);

        function toggleBody(){
            setIsOpen(!isOpen)
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