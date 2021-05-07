import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import player from "./player";
import puzzle from "./puzzle";

const rootReducer = combineReducers({
  player,
  puzzle
});

export default rootReducer;
