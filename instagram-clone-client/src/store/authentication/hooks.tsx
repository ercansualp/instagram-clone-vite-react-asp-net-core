import {useSelector} from "react-redux";

export const useCurrrentUser = () => useSelector((state: any) => state.authentication.currentUser);
