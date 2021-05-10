import React, { useState, useEffect } from "react";

import { useDispatch } from "react-redux";
import { Route } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";

import { savePasswords } from "../../actions/password";
import { savePuzzles } from "../../actions/puzzle";
import { fetchPuzzles, fetchPasswords } from "../../api";
import { ModalProvider } from "../../contexts/ModalContext";
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

  const fetchData = async (apiCallback, dispatchAction) => {
    const response = await apiCallback();

    if (response.status === 200) {
      const { data } = await response.json();
      dispatch(dispatchAction(data));
    }
  };

  const getPuzzlesAndPasswords = async () => {
    try {
      setIsLoading(true);

      await fetchData(fetchPuzzles, savePuzzles);
      await fetchData(fetchPasswords, savePasswords);
    } catch (err) {
      console.log(err);
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 2300);
    }
  };

  useEffect(() => {
    getPuzzlesAndPasswords();
  }, []);

  return (
    <Wrapper>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <GlobalFonts />
        {isLoading
          ? <Loading />
          : (
            <ModalProvider>
              <Route path="/" exact component={Main} />
              <Route path="/game/:room" component={Game} />
            </ModalProvider>
          )}
      </ThemeProvider>
    </Wrapper>
  );
}

export default App;
