import React, { useRef } from "react";

import PropTypes from "prop-types";

import kitchenObjects from "../../../constants/kitchen";
import useCanvas from "../../../hooks/useCanvas";
import RightButton from "../../Shared/RightButton";

function Kitchen({ runImageAction }) {
  const canvasRef = useRef();

  useCanvas(canvasRef, kitchenObjects, runImageAction);

  return (
    <>
      <canvas
        ref={canvasRef}
        width={800}
        height={600}
      />
      <RightButton path="/game/room/livingroom" text="거실" />
    </>
  );
}

Kitchen.propTypes = {
  runImageAction: PropTypes.func.isRequired
};

export default Kitchen;
