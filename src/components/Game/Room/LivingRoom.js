import React, { useRef } from "react";

import PropTypes from "prop-types";

import livingroomObjects from "../../../constants/livingroom.js";
import useCanvas from "../../../hooks/useCanvas";
import LeftButton from "../../Shared/LeftButton";
import RightButton from "../../Shared/RightButton";

function LivingRoom({ runImageAction }) {
  const canvasRef = useRef();

  useCanvas(canvasRef, livingroomObjects, runImageAction);

  return (
    <>
      <LeftButton path="/game/kitchen" text="부엌" />
      <canvas
        ref={canvasRef}
        width={800}
        height={600}
      />
      <RightButton path="/game/bedroom" text="방" />
    </>
  );
}

LivingRoom.propTypes = {
  runImageAction: PropTypes.func.isRequired
};

export default LivingRoom;
