import { useRouteError } from "react-router"

const Error = () => {
    const err= useRouteError();
    console.log(err);
return(
    <div className="m-6 px-4 p-1 font-bold"> 
        <h2>{err.status}</h2>
        <h2>{err.statusText}</h2>
    </div>
)
}

export default Error