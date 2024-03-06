import {Navigate, Outlet} from "react-router-dom";
import Main from "~/layouts/main";

export default function Protected(){
    const currentUser = {};

    if(currentUser)
        return <Main><Outlet /></Main>
    return <Navigate to="login" replace={true} />
}