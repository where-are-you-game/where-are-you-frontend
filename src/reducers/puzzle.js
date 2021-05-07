import produce from "immer";

import * as type from "../constants/actionTypes";
import PLAYER_ANSWER from "../constants/puzzle";

const initialState = {
  puzzles: [],
  byNumbers: [],
  playerAnswer: PLAYER_ANSWER
};

const puzzle = (state = initialState, action) => {
  switch (action.type) {
    case type.SAVE_PUZZLES:
      return produce(state, (draft) => {
        draft.puzzles = action.puzzles;
      });
    default:
      return state;
  }
};

export default puzzle;
