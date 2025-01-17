import React from "react";

class UserClass extends React.Component {
constructor(props){
    super(props);
    this.state={
        userInfo :{
            name: "Sush",
            location:"TX",

        }
    }
}

async componentDidMount(){
const data = await fetch("https://api.github.com/users/sushrutha15");
const json = await data.json();

this.setState({
    userInfo:json,
});
console.log(json);
}

componentDidUpdate(){
    console.log("Component Updated");
}

componentWillUnmount(){
    console.log("Component unmonted");
}

    render(){
        const {name, id, location} = this.state.userInfo;
        return(
            <div className="user-card">
                <h1>Name: {name}</h1>
                <h2>Id: {id}</h2>
                <h2>Location: {location}</h2>
                {/* <h2>Contact: {contact}</h2> */}
               
            </div>
        )
    }
}

export default UserClass;