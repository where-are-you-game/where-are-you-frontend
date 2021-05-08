import produce from "immer";

import * as type from "../constants/actionTypes";
import PLAYER_ANSWER from "../constants/puzzle";

const initialState = {
  playerAnswer: PLAYER_ANSWER,
  textBox: "테이블 위에 편지가 있다. 누가 쓴 거지? 읽어봐야겠다.",
  error: null
};

const game = (state = initialState, action) => {
  switch (action.type) {
    case type.CHANGE_TEXTBOX:
      return produce(state, (draft) => {
        draft.textBox = action.text;
      });
    case type.CHANGE_PLAYER_ANSWER:
      return produce(state, (draft) => {
        draft.playerAnswer[action.puzzleName].answer = action.answer;
      });
    default:
      return state;
  }
};

export default game;
