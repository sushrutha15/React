import UserClass from "./UserClass";
import {Component} from "react";
// const AboutComponent = () => {
//     return (
//         <div>
//             <h1>About</h1>
//             <h2>This is the About page</h2>
//             <UserClass name={"Sushrutha Patlolla"} location={"Dallas, Texas"} contact={"psushrutha15@gmail.com"}/>
//         </div>
//     )
// }

class AboutComponent extends Component{
constructor(props){
    super(props);
    console.log("Parent Constructor");
}

componentDidMount(){
    console.log("Parent Component Did Mount");
}

render(){
    console.log("Parent Render");
    return (
                <div>
                    <h1>About</h1>
                    <h2>This is the About page</h2>
                    <UserClass />
                  
                </div>
            )
}

}

export default AboutComponent;