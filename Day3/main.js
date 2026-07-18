import React from "react"
import ReactDOM from "react-dom/client"
import Header from "./src/component/Header"
import Body from "./src/component/Body"
import Footer from "./src/component/Footer"
import AppLayout from "./src/Applayout"
import Home from "./src/component/Home"
import Restaurantlisting from "./src/component/Restaurantlisting"
import Cart from "./src/component/Cart"
import Error from "./src/component/Eroor"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import MenuRestaurant from "./src/component/MenuRestaurant"
import Grocery from "./src/component/Grocery"
import DineOut from "./src/component/DineOut"
import { lazy, Suspense } from "react"

const Grocery=lazy(()=> import("./src/component/Grocery"))
const DineOut=lazy(()=> import("./src/component/DineOut"))


const routerApp=createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        children:[
            {
                path:"/",
                element:<Home/>
            },
            {
        path:"/restaurants",
        element:<Restaurantlisting/>

    },
    {
        path:`/restaurantsMenu/:resId`,
        element:<MenuRestaurant/>
    },
    {
        path:"/cart",
        element:<Cart/>
    },
    
        ],
        errorElement:<Error/>
    },
    {
        path:"/groceryGo",
        element:<Grocery/>
    },
    {
        path:"/GoDineOut",
        element:<DineOut/>
    }
    
])
const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={routerApp}/>)