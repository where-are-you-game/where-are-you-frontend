import React, { useRef } from "react";

import PropTypes from "prop-types";
import styled from "styled-components";

import useCanvas from "../../../hooks/useCanvas";
import LeftButton from "../../Shared/LeftButton";
import RightButton from "../../Shared/RightButton";

const Canvas = styled.canvas`
  &:focus {
    border: 2px solid ${({ theme }) => theme.color.red};
    outline: none;
  }
`;

function RoomCavnas(props) {
  const {
    runImageAction,
    room,
    items,
    leftButton,
    rightButton,
    description
  } = props;

  const canvasRef = useRef();

  useCanvas(room, canvasRef, items, runImageAction);

  return (
    <>
      {leftButton
        && <LeftButton path={leftButton.path} text={leftButton.text} />}
      <Canvas
        ref={canvasRef}
        tabIndex="0"
        width={800}
        height={600}
      >
        <h2>{room}</h2>
        <p className="sr-only">{description}</p>
      </Canvas>
      {rightButton
        && <RightButton path={rightButton.path} text={rightButton.text} />}
    </>
  );
}

RoomCavnas.propTypes = {
  runImageAction: PropTypes.func.isRequired,
  room: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  leftButton: PropTypes.object,
  rightButton: PropTypes.object,
  description: PropTypes.string.isRequired
};

RoomCavnas.defaultProps = {
  leftButton: null,
  rightButton: null
};

export default RoomCavnas;
