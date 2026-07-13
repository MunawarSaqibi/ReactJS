import React from "react"
import ReactDOM from "react-dom/client"
import Header from "./src/component/Header"
import Body from "./src/component/Body"
import Footer from "./src/component/Footer"
import AppLayout from "./src/Applayout"
import Home from "./src/component/Home"
import RestaurantMenu from "./src/component/RestaurantMenu"
import Restaurantlisting from "./src/component/Restaurantlisting"
import Cart from "./src/component/Cart"
import { createBrowserRouter,RouterProvider } from "react-router"

const routerApp=createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>
    },
    {
        path:"/restaurants",
        element:<Restaurantlisting/>

    },
    {
        path:"/restaurants/menu",
        element:<RestaurantMenu/>,
    },
    {
        path:"/cart",
        element:<Cart/>
    }
])
const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={routerApp}/>)