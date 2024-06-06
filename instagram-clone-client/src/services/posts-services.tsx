import HttpService from "~/services/httpService.ts";

export default async function SharePost(posts: FormData): Promise<void> {
    const { data } = await HttpService({
        method: "post",
        controller: "posts",
        data: posts
    });
    console.log("dönen cevap: ", data);
}
