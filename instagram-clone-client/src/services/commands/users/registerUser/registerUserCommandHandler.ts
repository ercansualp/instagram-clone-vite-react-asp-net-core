import {RegisterUserCommandRequest} from "~/services/commands/users/registerUser/registerUserCommandRequest.ts";
import HttpService from "~/services/httpService.ts";

export default async function RegisterUserCommandHandler(request: RegisterUserCommandRequest, successCallBack?: any, errorCallBack?: any)
{
    try {
        await HttpService({
            method: "post",
            data: request,
            controller: "users"
        });
        if(successCallBack)
            successCallBack();
    } catch {
        if(errorCallBack)
            errorCallBack();
    }
}
