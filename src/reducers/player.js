import produce from "immer";

import * as type from "../constants/actionTypes";


const initialState = {
  name: "",
  clearTime: 0
};

const player = (state = initialState, action) => {
  switch (action.type) {
    case type.SAVE_NAME:
      return {
        ...state,
        name: action.name
      };
    case type.SAVE_CLEARTIME:
      return {
        ...state,
        clearTime: action.clearTime
      };
    case type.REMOVE_PLAYER:
      return {
        ...state,
        name: "",
        clearTime: 0
      };
    case type.COUNT_CLEARTIME:
      return produce(state, (draft) => {
        const originTime = draft.clearTime;
        draft.clearTime = originTime + 1;
      });
    default:
      return state;
  }
};

export default player;
