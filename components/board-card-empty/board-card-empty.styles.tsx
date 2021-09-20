import styled from "styled-components";
export const Card = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 362px;
  height: 144px;
  text-decoration: none;
  border: 2px dashed ${(props) => props.theme.colors.secondary};
  border-radius: 10px;
  color: ${(props) => props.theme.colors.text_primary};
`;
export const Title = styled.p`
  font-size: 16px;
`;
