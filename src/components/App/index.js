import React from "react";

import { useSelector } from "react-redux";
import { Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { ModalProvider } from "../../contexts/ModalContext";
import GlobalStyles from "../../styles";
import GlobalFonts from "../../styles/fonts";
import theme from "../../styles/theme";
import Ending from "../Ending";
import Game from "../Game";
import Main from "../Main";
import Review from "../Review";
import NotFound from "../Shared/NotFound";
import PrivateRoute from "../Shared/PrivateRoute";

function App() {
  const playerName = useSelector((state) => state.player.name);
  const playerPassword = useSelector((state) => state.game.playerPassword);

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <GlobalFonts />
        <ModalProvider>
          <Switch>
            <Route path="/" exact component={Main} />
            <PrivateRoute
              path="/game/room/:room"
              isAuthenticated={Boolean(playerName !== "")}
              component={Game}
            />
            <PrivateRoute
              path="/game/ending"
              isAuthenticated={playerPassword["password5"].isUnlocked}
              component={Ending}
            />
            <Route path="/review" component={Review} />
            <Route render={(props) => <NotFound {...props} title={"404\nNot Found"} text="이런.. 존재하지 않는 페이지입니다." />}/>
          </Switch>
        </ModalProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
