import {ChangeEvent, MouseEvent, useState} from "react";
import * as Component from './styled-components.tsx';
import RegisterService from "~/services/commands/users/registerUser/registerUserCommandHandler.ts";
import {RegisterUserCommandRequest} from "~/services/commands/users/registerUser/registerUserCommandRequest.ts";
import {useNavigate} from 'react-router-dom';
import { toast } from 'react-toastify';

export default function Register() {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [formData, setFormData] = useState<RegisterUserCommandRequest>({email: "", password: "", name: undefined, username: ""});

    const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
        const { value } = e.target;
        setFormData({
            ...formData,
            [e.target.name]: (value !== null && value !== "" && value !== undefined) ? value : null
        });
    }

    const handleSubmit = async (event: MouseEvent<HTMLInputElement>): Promise<void> => {
        event.preventDefault();
        await RegisterService(formData, () => {
            toast("Kullanıcı kaydı başarıyla oluşturuldu!");
            navigate("/login", { replace: true });
        });
    }

    return (
        <Component.Container>
            <Component.Content>
                <Component.LoginForm>
                    <Component.LoginFormContent>
                        <Component.InstagramLogo />
                        <Component.FormInputs>
                            <Component.FormInput type="email" placeholder="E-posta" name="email"
                                                 value={formData.email} onChange={handleChange}/>
                            <Component.FormInput type="text" placeholder="Adı Soyadı" name="name"
                                                 value={formData.name} onChange={handleChange}/>
                            <Component.FormInput type="text" placeholder="Kullanıcı adı" name="username"
                                                 value={formData.username} onChange={handleChange}/>
                            <div style={{position: "relative"}}>
                                <Component.FormInput type={showPassword ? "text" : "password"} placeholder="Şifre"
                                                     name="password" value={formData.password} onChange={handleChange}/>
                                <Component.ShowPasswordButton onClick={() => setShowPassword(!showPassword)}>Göster</Component.ShowPasswordButton>
                            </div>
                            <Component.LoginButton type="submit" value="Kaydol" onClick={handleSubmit}/>
                        </Component.FormInputs>
                        <Component.RegisterInstagram>
                            <span>Hesabın var mı?</span>
                            <Component.RegisterInstagramButton to="/login">Giriş yap</Component.RegisterInstagramButton>
                        </Component.RegisterInstagram>
                    </Component.LoginFormContent>
                </Component.LoginForm>
            </Component.Content>
        </Component.Container>
    )
}
