import axios from "axios";

export interface HttpServiceOptions {
    controller?: string;
    action?: string;
    data?: object;
    headers?: object;
    queryParams?: object;
    fullPath?: string;
    method: string;
}

export default async function HttpService(HttpServiceOptions: Partial<HttpServiceOptions>)
{
    // https://localhost:7047/api/Users/Login
    // https://localhost:7047/api/users/login
    const PROTOCOL: string = "https";
    const HOST_NAME: string = "localhost";
    const API_PORT: string = "7241";
    let url: string = `${PROTOCOL}://${HOST_NAME}:${API_PORT}/api`;
    console.log("istek: ", url)
    if(HttpServiceOptions.controller)
        url += `/${HttpServiceOptions.controller}`;
    if(HttpServiceOptions.action)
        url += `/${HttpServiceOptions.action}`;
    const { data } = await axios({
        method: HttpServiceOptions.method,
        headers: HttpServiceOptions.headers,
        data: HttpServiceOptions.data,
        params: HttpServiceOptions.queryParams,
        url: HttpServiceOptions.fullPath ? HttpServiceOptions.fullPath : url
    });
    return data;
}
