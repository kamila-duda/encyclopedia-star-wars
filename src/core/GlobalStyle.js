import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
      html {
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }
      *,
      *::before,
      *::after {
        box-sizing: inherit;
    } 
      body {
        background-color: ${({ theme }) => theme.color.dark};
        font-family: 'Kanit', sans-serif;
        color: ${({ theme }) => theme.color.yellow};
    }
`;
