import React from "react";
import ReactDOM from "react-dom/client"

import HeaderComponent from "./components/Header";
import BodyComponent from "./components/Body";
import FooterComponent from "./components/Footer";


const AppLayout = () => {
    return (
        <div className="app">
        <HeaderComponent/>,
        <BodyComponent />,
        <FooterComponent />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<AppLayout />)
