import { Applogo } from "../utils/constants"
const Footer=()=>{


    return(
        <div className="footer-div">
            <div className="title-footer">
                        <img className="img-logo" src={Applogo} alt="Food App logo"/>
                        <div>
                            <div className="footer-name">Yummy<span  className="go-span">Go</span></div>
                            <div>&copy;2026 YummyGo Limited</div>
                        </div>
                        
                    </div>
            
            <div>Contact:+91524554561664646</div>

        </div>
    )

}

export default Footer