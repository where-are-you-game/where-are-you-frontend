import produce from "immer";

import * as type from "../constants/actionTypes";

const initialState = {
  list: [],
  hasFetched: false
};

const review = (state = initialState, action) => {
  switch (action.type) {
    case type.SAVE_REVIEWS:
      return produce(state, (draft) => {
        if (draft.hasFetched) return;

        draft.list = [ ...draft.list, ...action.reviews ];
        draft.hasFetched = true;
      });
    case type.SAVE_REVIEW:
      return produce(state, (draft) => {
        draft.list.unshift(action.review);
      });
    default:
      return state;
  }
};

export default review;
