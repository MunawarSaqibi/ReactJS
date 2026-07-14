import { BiryaniPNG, BurgerPNG, ChineesePNG, DessertsPNG, MandiPNG, PizzaPNG } from "../utils/constants"

const HeroDiv=()=>{
    return(
        <div>
            <div className="hero-container">
            <div className="main-caption">Delicious Food, </div>
            <div className="main-caption">Delivered Fast</div>
            <div className="sub-caption">Your favourite meals,</div>
            <div className="sub-caption">at your doorstep</div>
            <button className="order-btn">Order Now</button>
            
        </div>
        <div>
            <div className="category-name">Top categories</div>
            <div className="top-categories">
            <img className="categoryImg" src={BiryaniPNG} alt="" />
             <img className="categoryImg" src={PizzaPNG} alt="" />
              <img className="categoryImg" src={BurgerPNG} alt="" />
               <img className="categoryImg" src={ChineesePNG} alt="" />
                <img className="categoryImg" src={DessertsPNG} alt="" />
                 <img className="categoryImg" src={MandiPNG} alt="" />
        </div>
        </div>
        
        </div>
        

        
    )
}
export default HeroDiv