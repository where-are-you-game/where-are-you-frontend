import React, { useRef } from "react";

import PropTypes from "prop-types";

import livingroomObjects from "../../../constants/livingroom.js";
import useCanvas from "../../../hooks/useCanvas";
import LeftButton from "../../Shared/LeftButton";
import RightButton from "../../Shared/RightButton";

function LivingRoom({ showPuzzle }) {
  const canvasRef = useRef();

  useCanvas(canvasRef, livingroomObjects, showPuzzle);

  return (
    <>
      <LeftButton path="/game/kitchen" text="부엌" />
      <canvas
        ref={canvasRef}
        width={800}
        height={600}
      />
      <RightButton path="/game/room" text="방" />
    </>
  );
}

LivingRoom.propTypes = {
  showPuzzle: PropTypes.func.isRequired
};

export default LivingRoom;
