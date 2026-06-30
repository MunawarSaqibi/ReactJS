// const heading=document.createElement("h1")
// heading.innerText="Hello Word with JavaScript"
// const root=document.getElementById("root")
// root.appendChild(heading)

// const heading=React.createElement("h1",{id:"heading"},"Hello World By React")
// const root=ReactDOM.createRoot(document.getElementById("root")).render(heading)

// console.log(React)

// console.log(ReactDOM)

// const heading=React.createElement("h1",{},"Hello")
// React.createElement("div",{},
//     React.createElement("h1",{},"Nested")
// )

// // React.createElement("div",{},
//     React.createElement("h1",{},"First"),
//      React.createElement("h1",{},"Second")
// )

// const heading=React.createElement("h1",{
//     id:"heading"
// },"Hello")

// console.log(heading)

// const heading=React.createElement("h1",{},"Hello From React")
// const root=ReactDOM.createRoot(document.getElementById("root"))
// root.render(heading)

// const parent=React.createElement(
//     "div",
//     {id:"parent"},
//     React.createElement(
//         "div",
//         {id:"child"},
//         React.createElement(
//             "h1",
//             {},
//             "Iam an H1 Tag"
//         )
//     )
// )

// const root=ReactDOM.createRoot(document.getElementById("root")).render(parent)


// const child=React.createElement("div",
//     {id:"child",
       
//     },
//      React.createElement("h1",
//         {},
//         "Iam an H1 tag"
//      ),
//      React.createElement("h2",
//         {},
//         "Iam an H2 tag"
//      )
// )

// const root=ReactDOM.createRoot(document.getElementById("parent"))
// root.render(child)

// const parent = React.createElement(
// "div",
// { id: "parent" },
// [ // Array of two child divs
// React.createElement(
// "div",
// { id: "child1" },
// React.createElement("h1", {}, "I'm in child 1")
// ),
// React.createElement(
// "div",
// { id: "child2" },
// React.createElement("h2", {}, "I'm in child 2")
// )
// ]
// );


// const complexStructure = React.createElement(
// "div",
// { id: "container" },
// [
// React.createElement(
// "div",
// { id: "header" },
// [
// React.createElement("h1", {}, "Website Title"),
// React.createElement("p", {}, "Tagline here")
// ]
// ),
// React.createElement(
// "div",
// { id: "main" },
// [
// React.createElement(
// "div",
// { id: "sidebar" },
// React.createElement("ul", {}, [
// React.createElement("li", {}, "Link 1"),
// React.createElement("li", {}, "Link 2"),
// React.createElement("li", {}, "Link 3")
// ])
// ),
// React.createElement(
// "div",
// { id: "content" },
// React.createElement("p", {}, "Main content here")
// )
// ]
// )
// ]
// );

// const root=ReactDOM.createRoot(document.getElementById("parent")).render(complexStructure)


// const headerElement=React.createElement(
//     "div",
//     {id:"header"},
//     React.createElement("h1",{},
//         "Header By React"
//     )
// )
// const root=ReactDOM.createRoot(document.getElementById("header-root")).render(headerElement)


const app=React.createElement("div",
    {
        id: "app", clasName:"container"
    },
[
    React.createElement("div",
        {
            className:"header"
        },
        React.createElement("h1",
            {},
            "Welcome to React"
        )
    ),
    React.createElement("div",{className:"content"},
        [
            React.createElement("h2",{},"Getting started"),
            React.createElement("p",{},"This is my first React app!"),
            React.createElement("ul",{},
                [
                    React.createElement("li",{},"Learn React"),
                    React.createElement("li",{},"Build Projects"),
                    React.createElement("li",{},"Get a Job!")
                ]
            )
        ]
    )

])


ReactDOM.createRoot(document.getElementById("root")).render(app)
