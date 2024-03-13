import store from "~/store";
import {_setSidebarWidth} from "~/store/dimensions/index.tsx";

export const setSidebarWidth = (sidebarWidth: number) => store.dispatch(_setSidebarWidth(sidebarWidth));