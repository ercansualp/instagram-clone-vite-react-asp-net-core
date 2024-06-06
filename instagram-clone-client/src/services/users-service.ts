import HttpService from "~/services/httpService.ts";

export default async function FindUserByUsername(username: string) {
    return await HttpService({
        method: "get",
        fullPath: `https://localhost:7241/api/users/${username}`
    });
}
