import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import game from "./game";
import player from "./player";
import puzzle from "./puzzle";
import puzzleModal from "./puzzleModal";

const rootReducer = combineReducers({
  player,
  game,
  puzzle,
  puzzleModal
});

export default rootReducer;
