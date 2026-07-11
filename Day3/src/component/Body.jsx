import Shimmer from "./Shimmer"
import { useState, useEffect } from "react"
import Restaurantcard from "./Restaurantcard"
import { swiggyURL } from "../utils/constants"


const Body = () => {
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

        <div className="items-container">
            {hotelList.map((resObj)=>{
                return(
                    <Restaurantcard resData={resObj?.info} key={resObj?.info?.id} />
                )
            })}
        </div>
    );
   

}

export default Body