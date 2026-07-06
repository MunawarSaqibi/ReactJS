import React from "react"
import ReactDOM from "react-dom/client"

function Header(){
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

function Body(){
    return(
        <div className="items-conatiner">
            
            <div className="item-card">
                <div >
                    <img className="item-img" src="https://ik.imagekit.io/marSaQ/Image-symbol-icon-vector-by-Hoeda80-580x386.jpg"/>
                </div>
                <div className="item-res">Restaurant Name</div>
                <div className="item-loc">Location</div>
                <div className="item-rp">Rating | Price of two</div>
            </div>
           
           <div className="item-card">
                <div >
                    <img className="item-img" src="https://ik.imagekit.io/marSaQ/Image-symbol-icon-vector-by-Hoeda80-580x386.jpg"/>
                </div>
                <div className="item-res">Restaurant Name</div>
                <div className="item-loc">Location</div>
                <div className="item-rp">Rating | Price of two</div>
            </div>

            <div className="item-card">
                <div >
                    <img className="item-img" src="https://ik.imagekit.io/marSaQ/Image-symbol-icon-vector-by-Hoeda80-580x386.jpg"/>
                </div>
                <div className="item-res">Restaurant Name</div>
                <div className="item-loc">Location</div>
                <div className="item-rp">Rating | Price of two</div>
            </div>

            <div className="item-card">
                <div >
                    <img className="item-img" src="https://ik.imagekit.io/marSaQ/Image-symbol-icon-vector-by-Hoeda80-580x386.jpg"/>
                </div>
                <div className="item-res">Restaurant Name</div>
                <div className="item-loc">Location</div>
                <div className="item-rp">Rating | Price of two</div>
            </div>

            <div className="item-card">
                <div >
                    <img className="item-img" src="https://ik.imagekit.io/marSaQ/Image-symbol-icon-vector-by-Hoeda80-580x386.jpg"/>
                </div>
                <div className="item-res">Restaurant Name</div>
                <div className="item-loc">Location</div>
                <div className="item-rp">Rating | Price of two</div>
            </div>

            <div className="item-card">
                <div >
                    <img className="item-img" src="https://ik.imagekit.io/marSaQ/Image-symbol-icon-vector-by-Hoeda80-580x386.jpg"/>
                </div>
                <div className="item-res">Restaurant Name</div>
                <div className="item-loc">Location</div>
                <div className="item-rp">Rating | Price of two</div>
            </div>

            <div className="item-card">
                <div >
                    <img className="item-img" src="https://ik.imagekit.io/marSaQ/Image-symbol-icon-vector-by-Hoeda80-580x386.jpg"/>
                </div>
                <div className="item-res">Restaurant Name</div>
                <div className="item-loc">Location</div>
                <div className="item-rp">Rating | Price of two</div>
            </div>

            <div className="item-card">
                <div >
                    <img className="item-img" src="https://ik.imagekit.io/marSaQ/Image-symbol-icon-vector-by-Hoeda80-580x386.jpg"/>
                </div>
                <div className="item-res">Restaurant Name</div>
                <div className="item-loc">Location</div>
                <div className="item-rp">Rating | Price of two</div>
            </div>



        </div>
    )

}

function Footer(){
    return(
        <div className="footer-div">
            <div>&copy; All rights are Reserved 2026</div>
        </div>
    )

}

function App(){
   return(
   <div>
    <Header/>
    <Body/>
    <Footer/>
    </div>
   )
}

const root=ReactDOM.createRoot(document.getElementById("root")).render(<App/>)