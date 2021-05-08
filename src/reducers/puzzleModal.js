import produce from "immer";

import * as type from "../constants/actionTypes";

const initialState = {
  name: "",
  title: "",
  content: "",
  style: "",
  cssBefore: "",
  cssAfter: "",
  markup: "",
  output: "",
  isVisible: false
};

const puzzleModal = (state = initialState, action) => {
  switch (action.type) {
    case type.SHOW_PUZZLE_MODAL:
      return produce(state, (draft) => {
        const {
          name,
          title,
          content,
          style,
          cssBefore,
          cssAfter,
          markup,
          output
        } = action.puzzle;

        draft.name = name;
        draft.title = title;
        draft.content = content;
        draft.style = style;
        draft.cssBefore = cssBefore;
        draft.cssAfter = cssAfter;
        draft.markup = markup;
        draft.output = output;
        draft.isVisible = true;
      });
    case type.HIDE_PUZZLE_MODAL:
      return {
        ...state,
        isVisible: false
      };
    default:
      return state;
  }
};

export default puzzleModal;
