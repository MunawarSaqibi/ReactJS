import { Applogo } from "../utils/constants"

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
                 <li>About</li>
                  <li>Contact-us</li>
                   <li>Cart</li>
            </ul>
        </div>
        
    </div>
    )
}

export default Header