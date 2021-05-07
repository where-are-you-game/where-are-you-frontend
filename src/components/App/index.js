import React from "react";

import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
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
        <Router>
          <Route path="/" exact component={Main} />
          <Route path="/game/livingroom">
            <Game color="#fcf9e9" />
          </Route>
        </Router>
      </ThemeProvider>
    </Wrapper>
  );
}

export default App;
