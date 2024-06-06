import {Navigate, Outlet} from "react-router-dom";
import {useCurrrentUser} from "~/store/authentication/hooks.tsx";

export default function Public(){
    const currentUser = useCurrrentUser();

    if(currentUser)
        return <Navigate to="/" replace={true} />
    return <Outlet />
}
