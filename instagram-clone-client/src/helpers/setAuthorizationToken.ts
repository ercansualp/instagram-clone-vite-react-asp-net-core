import axios from 'axios';
import { jwtDecode } from "jwt-decode";

export const setAuthorizationToken = (): void => {
    const accessToken: string|null = localStorage.getItem("accessToken");
    if (accessToken !== null) {
        try {
            const decodedToken = jwtDecode(accessToken);
        } catch {
            axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
        }
    }
    else
        delete axios.defaults.headers.common["Authorization"];
}
