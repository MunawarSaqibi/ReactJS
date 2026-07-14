import { Applogo } from "../utils/constants"
import { cartIcon } from "../utils/constants"
import { Link } from "react-router-dom"

const Header=()=>{
    return(
        <div className="header-container">
            <img className="img-logo" src={Applogo} alt="Food App logo"/>
       <div className="search-bar">
            <input className="searchBar" placeholder="Search Food , Restaurants and More" />
            </div>
        <div className="nav-bar">
            <ul>
                <li>
                    <Link className="nav-option" to={"/"}>Home</Link>
                    </li>
                 <li>
                    <Link className="nav-option" to={"/restaurants"}>Restaurants</Link></li>
                  <li>Offers</li>
                   <li>Help</li>
                   <li>
                    <Link className="nav-option" to={"/cart"}>
                    <img className="cartIcon" src={cartIcon} alt="add to cart" />
                    </Link></li>
            </ul>
        </div>
        
    </div>
    )
}

export default Header