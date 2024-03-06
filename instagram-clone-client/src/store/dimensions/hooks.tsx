import {useSelector} from "react-redux";

export const useSidebarWidth = () => useSelector((state) => state.dimensions.sidebarWidth);