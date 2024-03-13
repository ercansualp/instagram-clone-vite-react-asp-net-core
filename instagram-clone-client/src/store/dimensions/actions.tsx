import store from "~/store";
import {_setContentMargin, _setSidebarWidth} from "~/store/dimensions/index.tsx";

export const setSidebarWidth = (sidebarWidth: number) => store.dispatch(_setSidebarWidth(sidebarWidth));
export const setContentMargin = (contentMargin: number) => store.dispatch(_setContentMargin(contentMargin));