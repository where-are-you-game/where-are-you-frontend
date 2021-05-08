import * as type from "../constants/actionTypes";

export const showPuzzleModal = (puzzle) => ({
  type: type.SHOW_PUZZLE_MODAL,
  puzzle
});

export const hidePuzzleModal = () => ({
  type: type.HIDE_PUZZLE_MODAL
});
