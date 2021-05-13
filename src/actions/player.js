import * as type from "../constants/actionTypes";

export const savePlayerName = (name) => ({
  type: type.SAVE_NAME,
  name
});

export const saveClearTime = (clearTime) => ({
  type: type.SAVE_NAME,
  clearTime
});

export const removePlayer = () => ({
  type: type.REMOVE_PLAYER
});

export const countClearTime = () => ({
  type: type.COUNT_CLEARTIME
});
