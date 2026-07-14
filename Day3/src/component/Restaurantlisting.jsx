import { useMemo, useState } from "react";
import { restaurantArr } from "../utils/mockData";
import Home from "./Home";
import ResFilter from "./ResFilter";
import { RestAllWrap } from "./RestAllWrap";

const Restaurantlisting = () => {
    return(
       <div>
        <ResFilter/>
        <RestAllWrap/>
       </div>
    )
}
export default Restaurantlisting