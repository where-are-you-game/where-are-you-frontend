import * as type from "../constants/actionTypes";

export const saveReviews = (reviews) => ({
  type: type.SAVE_REVIEWS,
  reviews
});

export const saveReview = (review) => ({
  type: type.SAVE_REVIEW,
  review
});
