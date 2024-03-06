import store from "~/store";
import {_setSidebarSection} from "~/store/sidebar/index.tsx";

export const setSidebarSection = (sidebarSection: boolean) => store.dispatch(_setSidebarSection(sidebarSection));