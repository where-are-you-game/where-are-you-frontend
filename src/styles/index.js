import ReseterCSS from "reseter.css";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  ${ReseterCSS};

  body {
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({ theme }) => theme.color.background};
    font-family: "Gaegu", "Goudy Bookletter 1911", sans-serif;
  }

  a {
    color: ${({ theme }) => theme.color.black};

    &:hover {
      text-decoration: none;
    }
  }

  ul,
  ul li {
    list-style: none;
  }
`;

export default GlobalStyles;
