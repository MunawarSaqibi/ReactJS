import { useEffect, useState } from "react"
import RestAllCard from "./RestAllCard"
import { swiggyURL } from "../utils/constants"
import Shimmer from "./Shimmer"
import Restaurantcard from "./Restaurantcard"
import MenuRestaurant from "./MenuRestaurant"
import { Link } from "react-router-dom"
import Body from "./Body"
export const RestAllWrap = () => {

    const [hotelList, setHotelList]=useState(null)

    useEffect(()=>{
        getData();
    },[])

    const getData= async()=>{

        const response= await fetch(swiggyURL);
        const data= await response.json();
        console.log( 
             data.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        );

        setHotelList(
             data.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants,
        );
        // console.log("hotel list", hotelList)
    }

    if(hotelList == null){
        return <Shimmer/>
    }

    return (
        <div>

            <div className="category-name">Features Restaurant</div>
            <div className="items-container">
            {hotelList.map((resObj)=>{
                return(
                    <Link to={`/restaurantsMenu/${resObj?.info?.id}`} key={resObj?.info?.id}>
                    <Restaurantcard resData={resObj?.info}  />
                    </Link>
                    
                )
            })}
        </div>
        </div>
        
    );
   

}

export default RestAllWrap