import store from "~/store";
import {_setCurrentUser} from "~/store/authentication/index.tsx";

export const setCurrentUser = (user: any) => store.dispatch(_setCurrentUser(user));
