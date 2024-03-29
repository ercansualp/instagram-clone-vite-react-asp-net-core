import {useSelector} from "react-redux";

export const useSidebarWidth = () => useSelector((state: any) => state.dimensions.sidebarWidth);
export const useContentMargin = () => useSelector((state: any) => state.dimensions.contentMargin);