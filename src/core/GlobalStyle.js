import { createGlobalStyle } from "styled-components";
import background from "../assets/background.jpg";

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
        background-image: url(${background});
        background-size: 100%;
        background-position: center;
        background-attachment: fixed;
        font-family: 'Kanit', sans-serif;
        color: ${({ theme }) => theme.color.yellow};
        animation: moveBackground 60s ease-in-out infinite;
    }
      p {
      margin: 5px;
    }

    @keyframes moveBackground {
      50% {
        background-size: 120%;
      }
    }
`;
