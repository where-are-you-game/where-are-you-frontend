import React, { useState, useEffect } from "react";

import { useDispatch } from "react-redux";
import { Route } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";

import { savePuzzles } from "../../actions/puzzle";
import { fetchPuzzles } from "../../api";
import GlobalStyles from "../../styles";
import GlobalFonts from "../../styles/fonts";
import theme from "../../styles/theme";
import Game from "../Game";
import Loading from "../Loading";
import Main from "../Main";

const Wrapper = styled.div``;

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const getPuzzles = async () => {
      try {
        setIsLoading(true);
        const response = await fetchPuzzles();

        if (response.status === 200) {
          const { data } = await response.json();
          dispatch(savePuzzles(data));
        }
      } catch (err) {
        console.log(err);
      } finally {
        setTimeout(() => {
          setIsLoading(false);
        }, 2300);
      }
    };

    getPuzzles();
  }, []);

  return (
    <Wrapper>
          <ThemeProvider theme={theme}>
            <GlobalStyles />
            <GlobalFonts />
            {isLoading
              ? <Loading />
              : (
                <>
                  <Route path="/" exact component={Main} />
                  <Route path="/game/:room" component={Game} />
                </>
              )}
          </ThemeProvider>
    </Wrapper>
  );
}

export default App;
