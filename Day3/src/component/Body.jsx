import Restaurantcard from "./Restaurantcard"
import { restaurantArr } from "../utils/mockData"

const Body=()=>{
    return(
        <div className="items-conatiner">
            {restaurantArr.map((props)=>{
                return <Restaurantcard resData={props} key={props.id} />
            })}
        </div>
    )

}

export default Body