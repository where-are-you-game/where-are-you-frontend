import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import game from "./game";
import password from "./password";
import player from "./player";
import puzzle from "./puzzle";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["player", "game"]
};

const rootReducer = combineReducers({
  player,
  game,
  puzzle,
  password
});

export default persistReducer(persistConfig, rootReducer);
