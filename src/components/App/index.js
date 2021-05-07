import React from "react";

import { Route } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";

import GlobalStyles from "../../styles";
import GlobalFonts from "../../styles/fonts";
import theme from "../../styles/theme";
import Game from "../Game";
import Main from "../Main";

const Wrapper = styled.div``;

function App() {
  return (
    <Wrapper>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <GlobalFonts />
        <Route path="/" exact component={Main} />
        <Route path="/game/:room" component={Game} />
      </ThemeProvider>
    </Wrapper>
  );
}

export default App;
