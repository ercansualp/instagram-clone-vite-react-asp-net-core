import {Navigate, Outlet} from "react-router-dom";

export default function Public(){
    const currentUser = {};

    if(currentUser)
        return <Navigate to="/" replace={true} />
    return <Outlet />
}