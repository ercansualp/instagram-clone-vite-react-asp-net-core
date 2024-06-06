import styled from "styled-components";
import {Link} from "react-router-dom";
import Logo from "~/assets/img/instagram-icons-2.png";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const Content = styled.div`
  flex-grow: 1;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const LoginForm = styled.div`
  width: 350px;
  border: 1px solid rgb(219, 219, 219);
  border-radius: 1px;
`

export const LoginFormContent = styled.div`
  padding: 10px 0;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const RegisterInstagram = styled.div`
  padding: 10px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  font-size: 14px;
  font-weight: 400;
`

export const InstagramLogo = styled.i`
  background-image: url(${Logo});
  background-position: 0px -52px;
  background-size: auto;
  width: 175px;
  margin-top: 36px;
  height: 51px;
  background-repeat: no-repeat;
  display: inline-block;
  margin-bottom: 12px;
  cursor: pointer;
`

export const FormInputs = styled.form`
  margin-bottom: 10px;
  padding-top: 24px;
  display: flex;
  flex-direction: column;
`

export const FormInput = styled.input`
  margin-bottom: 6px;
  width: 266px;
  height: 36px;
  padding: 9px 55px 7px 8px;
  text-align: left;
  font-size: 16px;
  font-weight: 400;
  background-color: rgb(250, 250, 250);
  border: 1px solid rgb(219, 219, 219);

  &::placeholder {
    color: rgb(115, 115, 115);
    font-size: 12px;
    font-weight: 400;
  }
`

export const LoginButton = styled.input`
  background-color: rgb(0, 149, 246);
  padding: 7px 16px;
  font-size: 14px;
  font-weight: 600;
  display: flex;
  border-radius: 8px;
  color: white;
  width: 266px;
  justify-content: center;
  cursor: pointer;
  margin-top: 10px;

  &:disabled {
    opacity: 0.7;
  }
`

export const ShowPasswordButton = styled.div`
  position: absolute;
  right: 7px;
  top: 7px;
  color: rgb(38, 38, 38);
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    opacity: 0.5;
  }
`

export const RegisterInstagramButton = styled(Link)`
  color: rgb(0, 149, 246);
`
