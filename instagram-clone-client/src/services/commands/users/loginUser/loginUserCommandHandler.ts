import {LoginUserCommandRequest} from "~/services/commands/users/loginUser/loginUserCommandRequest.ts";
import {setCurrentUser} from "~/store/authentication/actions.tsx";
import HttpService from "~/services/httpService.ts";

export default async function Login(params: Partial<Params>): Promise<void> {
    const { userData, errorCallBack, successCallBack } = params;
    try {
        const result = await HttpService({
            controller: "auth",
            data: userData,
            method: "post"
        });
        console.log("dönen token: ", result);
        // const result: LoginUserCommandResponse = response.data;
        localStorage.setItem("accessToken", result.token);
        setCurrentUser(result.user);
        if(successCallBack)
            successCallBack();
    } catch {
        if(errorCallBack)
            errorCallBack();
    }
}

interface Params {
    userData: LoginUserCommandRequest;
    successCallBack?: () => void;
    errorCallBack?: () => void;
}
