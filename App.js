import React from "react";
import ReactDOM from "react-dom/client"
import logo from "./Images/svm_logo.png"
import user from "./Images/user1.png"

//Assignment- 3
//Creating Header element using React.createElement
const heading = React.createElement("div",{class:"title"},
    React.createElement("h1",{},"Hello H1"),
    React.createElement("h2",{},"Hello H2"), 
    React.createElement("h3",{},"Hello H3"));
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(heading)

//Creating Header element using JSX
const heading1=(<div class="title">
<h1>Hello H1 </h1>
<h2>Hello H2</h2>
<h3>Hello H3</h3>
</div>)

root.render(heading1)

//Creating a functional component
const HeadingComponent = () => (
    <div class="title">
    <h1>Hello H1 </h1>
     <h2>Hello H2</h2>
     <h3>Hello H3</h3>
     </div>
     ) 

root.render(<HeadingComponent/>)

// Creating header component using JSX 
const HeaderComponent2 = () => (
<div class="title">
    <img src={logo} alt="logo" class="logo"/>
    <input type="search" placeholder="search" class="search"></input>
    <img src={user} alt="user" class="user"/>
</div>
)



root.render(<HeaderComponent2 />)
/*const heading = <h1 id="head">Namaste React</h1>

const root = ReactDOM.createRoot(document.getElementById('root'))

const number = "10000";

const HeadingComponent =()=>(  
    <div id="component">
     <h2>{number}</h2>
    <h2>Hello React functional component</h2>
    </div>
)

const title = (  
    <div id="title">
        <h1>Hello Title</h1>
        <HeadingComponent />
    </div>
)

root.render(title) */
