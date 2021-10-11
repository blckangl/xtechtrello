import NavHeader from "components/nav-header";
import { useEffect, useState } from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { normalize } from "styled-normalize";

export const GlobalStyle = createGlobalStyle` 
   ${normalize}
  html {
  box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
    padding: 0;
    margin:0;  }
  body {
    padding: 0;
  }
`;
const theme = {
  colors: {
    primary: "#f4f4f4",
    secondary: "#A8A8A8",
    text_primary: "#000",
    text_secondary: "#929292",
  },
};

const Layout = ({ children }: { children: any }) => {
  useEffect(() => {}, []);
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <NavHeader />
        {children}
      </ThemeProvider>
    </>
  );
};

export default Layout;
