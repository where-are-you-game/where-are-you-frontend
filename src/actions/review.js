import * as type from "../constants/actionTypes";

export const saveReviews = (reviews, page) => ({
  type: type.SAVE_REVIEWS,
  reviews,
  page
});

export const saveReview = (review) => ({
  type: type.SAVE_REVIEW,
  review
});
