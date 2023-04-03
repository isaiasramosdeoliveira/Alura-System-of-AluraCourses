import React, { useContext } from "react";
import styled, { ThemeProvider } from "styled-components";
import ThemeContext, { GlobalThemeContext } from "../../contexts/ThemeContext";

export const ThemeDark = {
  container: "rgb(25, 24, 24)",
  text: "white",
  shadow: "black",
};
export const ThemeLight = {
  container: "white",
  text: "black",
  shadow: "rgba(59, 57, 57, 0.635)",
};

const Content = styled.main`
  background: ${({ theme }) => theme.container};
  a {
    color: ${({ theme }) => theme.text};
  }
  .curse {
    box-shadow: 5px 5px 15px ${({ theme }) => theme.shadow};
  }
  color: ${({ theme }) => theme.text};
  padding: 25px;
  padding-bottom: 150px;
  min-height: 100vh;
`;

interface Props {
  children?: React.ReactNode;
}

export default ({ children }: Props) => {
  const { ways, setWays }: any = useContext(GlobalThemeContext);
  return (
    <ThemeProvider theme={ways}>
      <Content>{children}</Content>
    </ThemeProvider>
  );
};
