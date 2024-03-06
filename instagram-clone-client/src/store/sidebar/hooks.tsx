import {useSelector} from "react-redux";

export const useSidebarSection = () => useSelector((state) => state.sidebar.sidebarSection);