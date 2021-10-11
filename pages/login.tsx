import type { NextPage } from "next";
import Head from "next/head";

import { server } from "config";
import {
  MainContainer,
  FormTitle,
  InputContainer,
  Input,
  ButtonContainer,
  Button,
} from "components/shared/form";
import { Alert } from "components/shared/styles";
import userService from "services/user.service";
import { useState } from "react";
import Router from "next/router";

const Login = () => {
  const userSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let email = e.currentTarget.email.value;
    let password = e.currentTarget.password.value;
    if (email && password) {
      const res = await userService.login(email, password);
      console.log(res);
      if (!res.success) {
        setError(res.body);
      } else {
        Router.push("/");
      }
    }
  };
  const [error, setError] = useState("");
  return (
    <MainContainer onSubmit={(event) => userSubmit(event)}>
      <FormTitle>Login</FormTitle>

      {error.length > 0 ? <Alert>{error}</Alert> : ""}

      <InputContainer>
        <Input name="email" type="text" placeholder="Email" />
        <Input name="password" type="password" placeholder="Password" />
      </InputContainer>
      <ButtonContainer>
        <Button content="Login" />
      </ButtonContainer>
    </MainContainer>
  );
};

export default Login;
