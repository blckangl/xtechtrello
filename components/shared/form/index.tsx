import { StringDecoder } from "string_decoder";
import styled from "styled-components";

export const MainContainer = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  margin-top: 32px;
  height: 80vh;
  width: 30vw;
  background: white;
  box-shadow: 0 8px 32px 0 #929292;
  backdrop-filter: blur(8.5px);
  -webkit-backdrop-filter: blur(8.5px);
  border-radius: 10px;
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: 0.4rem;
  justify-content: space-evenly;
  @media only screen and (max-width: 320px) {
    width: 80vw;
    height: 90vh;
    hr {
      margin-bottom: 0.3rem;
    }
    h4 {
      font-size: small;
    }
  }
  @media only screen and (min-width: 360px) {
    width: 80vw;
    height: 90vh;
    h4 {
      font-size: small;
    }
  }
  @media only screen and (min-width: 411px) {
    width: 80vw;
    height: 90vh;
  }

  @media only screen and (min-width: 768px) {
    width: 80vw;
    height: 80vh;
  }
  @media only screen and (min-width: 1024px) {
    width: 70vw;
    height: 50vh;
  }
  @media only screen and (min-width: 1280px) {
    width: 30vw;
    height: 80vh;
  }
`;

export const FormTitle = styled.h2`
  color: #929292;
  margin: 3rem 0 2rem 0;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 40%;
  width: 100%;
`;

export const ButtonContainer = styled.div`
  margin: 1rem 0 2rem 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LoginWith = styled.h5`
  cursor: pointer;
`;

export const Input = ({
  type,
  placeholder,
  name,
}: {
  type: string;
  placeholder: string;
  name: string;
}) => {
  return <StyledInput name={name} type={type} placeholder={placeholder} />;
};

const StyledInput = styled.input`
  background: #f4f4f4;
  box-shadow: 0 8px 32px 0 #f4f4f4;
  border-radius: 2rem;
  width: 80%;
  height: 3rem;
  padding: 1rem;
  border: none;
  outline: none;
  color: black;
  font-size: 1rem;

  &:focus {
    display: inline-block;
    box-shadow: 0 0 0 0.2rem #929292;
    backdrop-filter: blur(12rem);
    border-radius: 2rem;
  }
  &::placeholder {
    color: #a8a8a8;
    font-weight: 100;
    font-size: 1rem;
  }
`;

export const Button = ({ content }: { content: string }) => {
  return <StyledButton>{content}</StyledButton>;
};

const StyledButton = styled.button`
  background: #a8a8a8;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  width: 65%;
  height: 3rem;
  border: none;
  color: white;
  border-radius: 2rem;
  cursor: pointer;
`;
