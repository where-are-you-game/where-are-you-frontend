import * as type from "../constants/actionTypes";

const initialState = {
  name: "",
  clearTime: ""
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
    default:
      return state;
  }
};

export default player;
