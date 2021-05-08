import React from "react";

import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import { changeTextBox } from "../../actions/game";
import { showPuzzleModal } from "../../actions/puzzleModal";
import Kitchen from "./Room/Kitchen";
import Livingroom from "./Room/LivingRoom";

const Wrapper = styled.div`
  width: 800px;
  height: 600px;
  position: absolute;
  top: 0;
  z-index: 1;
`;

function Room({ room }) {
  const puzzles = useSelector((state) => state.puzzle.byName);
  const dispatch = useDispatch();

  const showPuzzle = (object) => {
    if (object.text) {
      dispatch(changeTextBox(object.text));
    } else {
      dispatch(showPuzzleModal(puzzles[object.puzzle]));
    }
  };

  const renderRoom = (room) => {
    switch (room) {
      case "livingroom":
        return <Livingroom showPuzzle={showPuzzle} />;
      case "kitchen":
        return <Kitchen showPuzzle={showPuzzle} />;
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
  room: PropTypes.string.isRequired
};

export default Room;
