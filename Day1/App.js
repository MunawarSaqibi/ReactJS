import React from "react"
import ReactDOM from "react-dom/client"

import { sum } from 'lodash';

console.log("hello world")

const App = () => {
return <h1>Hello World</h1>;
};
ReactDOM.createRoot(document.getElementById('root')).render(<App />);