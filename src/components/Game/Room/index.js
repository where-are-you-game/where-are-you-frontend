import React, { useContext, useCallback } from "react";

import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import styled, { keyframes } from "styled-components";

import { changeTextBox } from "../../../actions/game";
import cursor from "../../../assets/common/search_cursor.png";
import { ModalContext } from "../../../contexts/ModalContext";
import DetailImage from "../DetailImage";
import Lock from "../Lock";
import SliderLock from "../SliderLock";
import StylePuzzle from "../StylePuzzle";
import BathRoom from "./BathRoom";
import BedRoom from "./BedRoom";
import CatRoom from "./CatRoom";
import Kitchen from "./Kitchen";
import Livingroom from "./LivingRoom";

const scale = keyframes`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.7)
  }

  100% {
    transform: scale(1);
  }
`;

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

const Circle = styled.div`
  width: 80px;
  height: 80px;
  position: absolute;
  top: -9999px;
  left: -9999px;
  z-index: 1;
  background: ${({ theme }) => theme.color.orange};
  border-radius: 50%;
  animation: ${scale} 2s infinite;
  mix-blend-mode: luminosity;
  opacity: 0;
`;

function Room({ room }) {
  const puzzles = useSelector((state) => state.puzzle.byName);
  const passwords = useSelector((state) => state.password.byName);

  const { handleModal } = useContext(ModalContext);
  const dispatch = useDispatch();
  const history = useHistory();

  const showText = (image) => {
    if (image.detailImage) {
      handleModal(<DetailImage image={image.detailImage} name={image.object} text={image.text}/>);
    }
    dispatch(changeTextBox(image.text));
  };

  const showLock = (image) => {
    const puzzle = puzzles[image.puzzle];
    const { name, password } = passwords[image.password];

    if (puzzle === undefined) {
      handleModal(<SliderLock name={name} password={password} />);
      return;
    }

    handleModal(<Lock name={name} password={password} puzzleName={puzzle.name} />);
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

    if (image.password) {
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
      case "catroom":
        return <CatRoom runImageAction={runImageAction} />;
      case "bathroom":
        return <BathRoom runImageAction={runImageAction} />;
      default:
        history.push("/notfound");
    }
  };

  return (
    <Wrapper id="canvasWrapper">
      {renderRoom(room)}
      <Circle id="circle" />
    </Wrapper>
  );
}

Room.propTypes = {
  room: PropTypes.string.isRequired
};

export default Room;
