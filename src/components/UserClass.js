import React from "react";

class UserClass extends React.Component {
constructor(props){
    super(props);
    // console.log(props);
    console.log("Child Constructor");

    this.state={
        count:0,
        count1:1,
    }
}

componentDidMount(){

}

    render(){
        const{location,contact} = this.props;
        const {count, count1}= this.state;
        console.log("Child Render");
        return(
            <div className="user-card">
                <h1>Name: {this.props.name}</h1>
                <h2>Location: {location}</h2>
                <h2>Contact: {contact}</h2>
                <h3>count:{count}</h3>
                <button onClick={()=>{
                    // count=count+1; -> Never update state variables directly. It will not update
                  this.setState({
                    count: this.state.count+1,
                    
                  })
                }}>Click</button>
                <h3>count1:{count1}</h3>
            </div>
        )
    }
}

export default UserClass;