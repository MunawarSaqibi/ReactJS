import React from "react"
import ReactDOM from "react-dom/client"

const Header=()=>{
    return(
        <div className="header-container">
        <div className="title-div">
            <img className="img-logo" src="https://ik.imagekit.io/marSaQ/attachment_108678654?updatedAt=1783321446836" alt="Food App logo"/>
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
const Restaurantcard=({resName,location,rating,price,link})=>{
    return (
         <div className="item-card">
                <div className="img-div">
                    <img className="item-img" src={link}/>
                </div>
                <div className="item-res">{resName}</div>
                <div className="item-loc">{location}</div>
                <div className="item-rp">⭐{rating} | ₹{price} for two</div>
            </div>
    )

}
const Body=()=>{
    return(
        <div className="items-conatiner">
            <Restaurantcard resName={"Mehfil"} location={"Bandlaguda"} rating={5} price={300} link={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/brmkurrhirop5y9mwtuf"} />
             <Restaurantcard resName={"Pista House"} location={"Bandlaguda"}rating={4.9} price={300}  link={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/a7cbbaf67e1dd91888d588396ee42730"}/>
              <Restaurantcard resName={"Lucky Restaurant"} location={"Bandlaguda"} rating={4.5} price={300} link={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/FOOD_CATALOG/IMAGES/CMS/2026/6/25/665d3979-e1a7-41e6-a0e4-37136acffde7_872e1528-6217-45c0-ba2f-8f05d7f87d9a.jpg"}/>
               <Restaurantcard resName={"Ruman"} location={"Bandlaguda"} rating={4.5} price={300} link={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/6/15/c4d3169f-62e1-4578-b79d-9ad104274311_f1877ef2-1ac6-410a-a702-53f7cdf0cd8b.jpg"}/>
                <Restaurantcard resName={"Redaan"} location={"Bandlaguda"} rating={4.1} price={300} link={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/brmkurrhirop5y9mwtuf"}/>
                 <Restaurantcard resName={"Jumera"} location={"Bandlaguda"} rating={5} price={300} link={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/FOOD_CATALOG/IMAGES/CMS/2025/3/4/10bd97ed-67db-4fa2-8e4e-9ff84dafb9f1_bc8a7837-f27e-4949-8f17-d94cae26a2c0.jpg"}/>
                  <Restaurantcard resName={"Shah Ghouse"} location={"Bandlaguda"} rating={4.8} price={300} link={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/FOOD_CATALOG/IMAGES/CMS/2026/4/15/daf1eabf-271d-403f-b2f0-b92abf16b73a_a6ad89b5-9a34-41c6-8505-5644f6527b83.jpg"}/>
                   <Restaurantcard resName={"Grand Hotel"}location={"Bandlaguda"} rating={5} price={300} link={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/h5k3lxdgmoi8bcfo5kgs"}/>
                    <Restaurantcard resName={"Blue Sea Restaurant"} location={"Bandlaguda"} rating={4.1} price={300} link={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/brmkurrhirop5y9mwtuf"}/>
                     <Restaurantcard resName={"Hotel Nayaab"} location={"Bandlaguda"} rating={4.3} price={300} link={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/FOOD_CATALOG/IMAGES/CMS/2026/3/5/73aa2a03-4b6b-4677-9c95-092d7c705778_d44aa5a7-eab8-4562-8326-435b48d17a61.JPG"}/>
        </div>
    )

}

const Footer=()=>{
    return(
        <div className="footer-div">
            <div>&copy; All rights are Reserved 2026</div>
        </div>
    )

}

const App=()=>{
   return(
   <div>
    <Header/>
    <Body/>
    <Footer/>
    </div>
   )
}

const root=ReactDOM.createRoot(document.getElementById("root")).render(<App/>)