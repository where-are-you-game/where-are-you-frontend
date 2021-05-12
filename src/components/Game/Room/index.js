import React, { useContext, useCallback } from "react";

import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import { changeTextBox } from "../../../actions/game";
import cursor from "../../../assets/common/search_cursor.png";
import { ModalContext } from "../../../contexts/ModalContext";
import Lock from "../Lock";
import StylePuzzle from "../StylePuzzle";
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

function Room({ room }) {
  const puzzles = useSelector((state) => state.puzzle.byName);
  const passwords = useSelector((state) => state.password.byName);
  const playerPassword = useSelector((state) => state.game.playerPassword);

  const { handleModal } = useContext(ModalContext);
  const dispatch = useDispatch();

  const showText = (image) => {
    dispatch(changeTextBox(image.text));
  };

  const showLock = (image) => {
    const puzzleName = puzzles[image.puzzle].name;
    const { name, password } = passwords[image.password];
    handleModal(<Lock name={name} password={password} puzzleName={puzzleName} />);
  };

  const showPuzzle = (image) => {
    const puzzle = puzzles[image.puzzle];
    handleModal(<StylePuzzle puzzle={puzzle} />);
  };

  const runImageAction = useCallback((image) => {
    if (image.text) {
      showText(image);
      return;
    }

    if (image.password && playerPassword[image.password].isUnlocked === false) {
      showLock(image);
      return;
    }

    if (image.puzzle) {
      showPuzzle(image);
    }
  }, []);

  const renderRoom = (room) => {
    switch (room) {
      case "livingroom":
        return <Livingroom runImageAction={runImageAction} />;
      case "kitchen":
        return <Kitchen runImageAction={runImageAction} />;
      case "bedroom":
        return <BedRoom runImageAction={runImageAction} />;
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
