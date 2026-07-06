import React from "react"
import ReactDOM from "react-dom/client"

function Header(){
    return(
        <div className="header-container">
        <div className="logo-div">
            <img className="img-logo" src="https://ik.imagekit.io/marSaQ/attachment_108678654?updatedAt=1783105327346" alt=""/>
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
            <div className="item-card"></div>
            <div className="item-card"></div>
           <div className="item-card"></div>
           <div className="item-card"></div>
           <div className="item-card"></div>
           <div className="item-card"></div>
           <div className="item-card"></div>
           <div className="item-card"></div>
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