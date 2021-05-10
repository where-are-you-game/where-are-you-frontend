import React from "react";

import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import { changeTextBox } from "../../../actions/game";
import { showPuzzleModal } from "../../../actions/puzzleModal";
import cursor from "../../../assets/common/search_cursor.png";
import BedRoom from "./BedRoom";
import Kitchen from "./Kitchen";
import Livingroom from "./LivingRoom";

const Wrapper = styled.div`
  width: 800px;
  height: 600px;
  position: absolute;
  top: 0;
  z-index: 1;

  &:hover {
    cursor: url(${cursor}), auto;
  };
`;

function Room({ room, showLock }) {
  const puzzles = useSelector((state) => state.puzzle.byName);
  const passwords = useSelector((state) => state.password.byName);
  const playerPassword = useSelector((state) => state.game.playerPassword);
  const dispatch = useDispatch();

  const showPuzzle = (image) => {
    if (image.text) {
      dispatch(changeTextBox(image.text));
      return;
    }

    if (image.password) {
      if (playerPassword[image.password].isUnlocked === false) {
        const { name, password } = passwords[image.password];
        showLock({ name, password });
        return;
      }
    }

    dispatch(showPuzzleModal(puzzles[image.puzzle]));
  };

  const renderRoom = (room) => {
    switch (room) {
      case "livingroom":
        return <Livingroom showPuzzle={showPuzzle} />;
      case "kitchen":
        return <Kitchen showPuzzle={showPuzzle} />;
      case "bedroom":
        return <BedRoom showPuzzle={showPuzzle} />;
      default:
        return <Livingroom />;
    }
  };

  return (
    <Wrapper>
      {renderRoom(room)}
    </Wrapper>
  );
}

Room.propTypes = {
  room: PropTypes.string.isRequired,
  showLock: PropTypes.func.isRequired
};

export default Room;
