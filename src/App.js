import React, { lazy, Suspense} from "react";
import ReactDOM from "react-dom/client"
import HeaderComponent from "./components/Header";
import BodyComponent from "./components/Body";
import FooterComponent from "./components/Footer";
import AboutComponent from "./components/About";
import { createBrowserRouter, RouterProvider, Outlet} from "react-router";
import ContactComponent from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";

const GroceryComponent = lazy(() => import("./components/Grocery"));


const AppLayout = () => {
    return (
        <div className="app">
        <HeaderComponent/>,
        <Outlet />
        </div>
    )
}


const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children:[
            {
                path: "/",
                element: <BodyComponent />
            },
            {
                path: "/about",
                element: <AboutComponent />,
            },
            {
                path: "/contact",
                element: <ContactComponent />
            },
            {
                path: "/grocery",
                element: <Suspense fallback={<h1 className="m-4 px-4">Loading screen</h1>}>
                    <GroceryComponent />
                </Suspense>
            },
            {
                path: "/restaurants/:resID",
                element: <RestaurantMenu />
            }
        ],
        errorElement: <Error />
    },
    
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<RouterProvider router ={appRouter} />)
