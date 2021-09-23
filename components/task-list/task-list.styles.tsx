import styled from "styled-components";

export const Title = styled.p`
  padding: 16px;
  background-color: #f4f4f4;
  border-radius: 10px;
  width: 100%;
`;
export const Container = styled.div`
  display: flex;
  width: 362px;
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 16px;
  flex-direction: column;
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;
