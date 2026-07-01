import React from "react";
import ReactDOM from "react-dom/client";



function Heading(){
    return <h1>Hello React</h1>
}
ReactDOM.createRoot(document.getElementById("root")).render(<Heading/>);
