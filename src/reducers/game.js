import produce from "immer";

import * as type from "../constants/actionTypes";
import PLAYER_ANSWER from "../constants/puzzle";

const initialState = {
  puzzles: [],
  byNumbers: [],
  playerAnswer: PLAYER_ANSWER,
  textBox: ""
};

const game = (state = initialState, action) => {
  switch (action.type) {
    case type.SAVE_PUZZLES:
      return produce(state, (draft) => {
        draft.puzzles = action.puzzles;
      });
    case type.CHANGE_TEXTBOX:
      return produce(state, (draft) => {
        draft.textBox = action.text;
      });
    default:
      return state;
  }
};

export default game;
