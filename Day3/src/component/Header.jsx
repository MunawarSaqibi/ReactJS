import { Applogo } from "../utils/constants"
import { cartIcon } from "../utils/constants"

const Header=()=>{
    return(
        <div className="header-container">
        <div className="title-div">
            <img className="img-logo" src={Applogo} alt="Food App logo"/>
            <div className="title-name">Yummy<span  className="go-span">Go</span></div>
        </div>
        <div>
            <input placeholder="Search Food,Restaurant" className="searchBar"/>
        </div>
        <div className="nav-bar">
            <ul>
                <li>Home</li>
                 <li>Restaurants</li>
                  <li>Offers</li>
                   <li>Help</li>
                   <li><img className="cartIcon" src={cartIcon} alt="add to cart" /></li>
            </ul>
        </div>
        
    </div>
    )
}

export default Header