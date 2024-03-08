import {useSelector} from "react-redux";

export const useSidebarSection = () => useSelector((state: any) => state.sidebar.sidebarSection);