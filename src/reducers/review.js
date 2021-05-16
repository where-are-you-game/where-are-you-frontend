import produce from "immer";

import * as type from "../constants/actionTypes";

const initialState = {
  byId: {},
  allIds: []
};

const review = (state = initialState, action) => {
  switch (action.type) {
    case type.SAVE_REVIEWS:
      return produce(state, (draft) => {
        const reviews = {};

        for (let i = 0; i < action.reviews.length; i++) {
          const review = action.reviews[i];
          reviews[review._id] = review;
          draft.allIds.push(review._id);
        }

        draft.byId = reviews;
      });
    case type.SAVE_REVIEW:
      return produce(state, (draft) => {
        const review = action.review;

        draft.byId[review._id] = review;
        draft.allIds.unshift(review._id);
      });
    default:
      return state;
  }
};

export default review;
