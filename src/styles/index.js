import ReseterCSS from "reseter.css";
import { css, createGlobalStyle } from "styled-components";

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

export const buttonStyle = css`
  width: 200px;
  height: 60px;
  margin: 1rem 0 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border: 1px solid ${({ theme, color }) => theme.color[color]};
  text-align: center;
  cursor: pointer;
  transition: all 400ms cubic-bezier(0.77, 0, 0.175, 1);

  &::after {
    width: 100%;
    height: 0;
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: -1;
    background: ${({ theme, color }) => theme.color[color]};
    content: "";
    transition: inherit;
  }

  &:hover {
    box-shadow: 1px 1px 15px 2px rgba(0, 0, 0, 0.1);
    color: #ffffff;

    &::after {
      height: 100%;
      top: 0;
    }
  }
`;

export default GlobalStyles;
