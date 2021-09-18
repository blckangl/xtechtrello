import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle` 
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
`;

const BasicLayout = ({ children }: { children: any }) => {
  return (
    <>
      <GlobalStyle />
      {children}
    </>
  );
};

export default BasicLayout;
