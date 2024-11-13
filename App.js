
/* To create nested elements in react */
const heading = React.createElement("div",{id: "parent"},[
    React.createElement("div",{id:"child"}, 
    [React.createElement("h1",{id: "head"},"I'm the h1 tag"), React.createElement("h2",{},"I'm h2 tag")]
), 
    React.createElement("div",{id:"child2"}, 
    [React.createElement("h1",{id: "head"},"I'm the h1 tag"), React.createElement("h2",{},"I'm h2 tag")])])

console.log(heading)
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(heading)