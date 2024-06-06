import {Navigate, Outlet} from "react-router-dom";
import Main from "~/layouts/main";
import {useCurrrentUser} from "~/store/authentication/hooks.tsx";

export default function Protected(){
    const currentUser = useCurrrentUser();

    if(currentUser)
        return <Main><Outlet /></Main>
    return <Navigate to="login" replace={true} />
}
