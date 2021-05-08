import * as type from "../constants/actionTypes";

export const changeTextBox = (text) => ({
  type: type.CHANGE_TEXTBOX,
  text
});

export const changePlayerAnswer = (puzzleName, answer) => ({
  type: type.CHANGE_PLAYER_ANSWER,
  puzzleName,
  answer
});
