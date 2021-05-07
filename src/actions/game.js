import * as type from "../constants/actionTypes";

export const changeTextBox = (text) => ({
  type: type.CHANGE_TEXTBOX,
  text
});
