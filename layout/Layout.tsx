import { createGlobalStyle, ThemeProvider } from "styled-components";
import { normalize } from "styled-normalize";

export const GlobalStyle = createGlobalStyle` 
  ${normalize}

body {
  padding: 0;
}
`;
const theme = {
  colors: {
    primary: "#fafafa",
  },
};

const Layout = ({ children }: { children: any }) => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </>
  );
};

export default Layout;
