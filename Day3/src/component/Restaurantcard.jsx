const Restaurantcard=({resData})=>{
    const{
        id,
        resName,
        cuisine,
        avgRating,
        delieveryTime,
        costForTwo,
        imgId,
        location,

    }= resData;

     return (
        <div className="item-card">
                 <div className="img-div">
                     <img className="item-img" src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${imgId}`}/>
                 </div>
                 <div className="item-res">{resName}</div>
                 <div className="item-cuisine">{cuisine}</div>
                 <div className="item-loc"> 📍{location} | ⏱️Delivery within {delieveryTime}min </div>
                 <div className="item-rp"> ⭐{avgRating} |  {costForTwo}</div>
             </div>
     )

}


export default Restaurantcard