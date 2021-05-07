import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import game from "./game";
import player from "./player";

const rootReducer = combineReducers({
  player,
  game
});

export default rootReducer;
