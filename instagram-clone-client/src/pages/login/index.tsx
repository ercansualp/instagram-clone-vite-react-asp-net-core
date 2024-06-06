import {ChangeEvent, MouseEvent, useState} from "react";
import * as Component from './styled-components.tsx';
import {LoginUserCommandRequest} from "~/services/commands/users/loginUser/loginUserCommandRequest.ts";
import LoginService from "~/services/commands/users/loginUser/loginUserCommandHandler.ts";

export default function Login() {
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [formData, setFormData] = useState<LoginUserCommandRequest>({usernameOrEmail: "", password: ""});
    const [showErrorMessage, setShowErrorMessage] = useState<boolean>(false);

    const showPswd = () => {
        setShowPassword(!showPassword);
    }

    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    }

    const handleSubmit = async (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        setShowErrorMessage(false);
        await LoginService({
            userData: formData,
            errorCallBack: () => setShowErrorMessage(true)
        });
        //const {data} = await SignIn(formData.email, formData.password);
        // if(!data) {
        //
        // }
    }

    return (
        <Component.Container>
            <Component.Content>
                <Component.LoginForm>
                    <Component.LoginFormContent>
                        <Component.InstagramLogo/>
                        { showErrorMessage ? <span className="text-red-400">Kullanıcı adı veya şifre yanlış</span> : null }
                        <Component.FormInputs>
                            <Component.FormInput type="email" placeholder="Telefon numarası, kullanıcı adı veya e-posta" name="usernameOrEmail"
                                                 value={formData.usernameOrEmail} onChange={handleChange}/>
                            <div style={{position: "relative"}}>
                                <Component.FormInput type={showPassword ? "text" : "password"} placeholder="Şifre"
                                                     name="password" value={formData.password} onChange={handleChange}/>
                                <Component.ShowPasswordButton onClick={showPswd}>Göster</Component.ShowPasswordButton>
                            </div>
                            <Component.LoginButton type="submit" value="Giriş yap" onClick={handleSubmit}/>
                        </Component.FormInputs>
                        <Component.ForgotPassword to="/login">Şifreni mi unuttun?</Component.ForgotPassword>
                        <Component.RegisterInstagram>
                            <span>Hesabın yok mu?</span>
                            <Component.RegisterInstagramButton to="/register">Kaydol</Component.RegisterInstagramButton>
                        </Component.RegisterInstagram>
                    </Component.LoginFormContent>
                </Component.LoginForm>
            </Component.Content>
        </Component.Container>
    )
}
