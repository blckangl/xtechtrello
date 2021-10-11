import type { NextPage } from "next";
import Head from "next/head";
import Router from "next/router";

import { server } from "config";
import {
  MainContainer,
  FormTitle,
  InputContainer,
  Input,
  ButtonContainer,
  Button,
} from "components/shared/form";
import { useState } from "react";
import { Alert } from "components/shared/styles";
import userService from "services/user.service";

const Register = () => {
  const userSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let email = e.currentTarget.email.value;
    let password = e.currentTarget.password.value;
    let username = e.currentTarget.username.value;
    if (email && password) {
      const res = await userService.register(email, password, username);
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
      <FormTitle>Register</FormTitle>
      {error.length > 0 ? <Alert>{error}</Alert> : ""}

      <InputContainer>
        <Input name="email" type="email" placeholder="Email" />
        <Input name="username" type="text" placeholder="UserName" />
        <Input name="password" type="password" placeholder="Password" />
      </InputContainer>
      <ButtonContainer>
        <Button content="Sign Up" />
      </ButtonContainer>
    </MainContainer>
  );
};

export default Register;
