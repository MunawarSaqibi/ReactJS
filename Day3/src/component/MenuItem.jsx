import { ImageBasicUrl, RatingStarIcon } from "../utils/constants";
const MenuItem=({details})=>{
    console.log("Details got", details);

    const {
        name,
        price,
        description,
        imageId,
        ratings,
        finalPrice,
        defaultPrice,
        isVeg,

    }=details;

    return (
        <div className="menu-item-outer-card">
        <div className="menu-item-card">
            <div className="menu-item-details">
                <h1>{name}</h1>
                <p>Price:  {price / 100 || finalPrice / 100 || defaultPrice / 100} /- </p>
                <p>
                   ⭐{ratings.aggregatedRating.rating}(
                    {ratings.aggregatedRating.ratingCount}
                   )
                </p>
                <div>{description}</div>
                
            </div>

            <div className="menu-item-img">
                <img className="menu-item-img" src={ImageBasicUrl + imageId} alt={name} />
            </div>
            </div>
            
        </div>
    )
}
export default MenuItem