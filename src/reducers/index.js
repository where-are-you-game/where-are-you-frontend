import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import game from "./game";
import player from "./player";
import puzzleModal from "./puzzleModal";

const rootReducer = combineReducers({
  player,
  game,
  puzzleModal
});

export default rootReducer;
