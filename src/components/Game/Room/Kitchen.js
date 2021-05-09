import React, { useRef } from "react";

import PropTypes from "prop-types";

import kitchenObjects from "../../../constants/kitchen";
import useCanvas from "../../../hooks/useCanvas";
import RightButton from "../../Shared/RightButton";

function Kitchen({ showPuzzle }) {
  const canvasRef = useRef();

  useCanvas(canvasRef, kitchenObjects, showPuzzle);

  return (
    <>
      <canvas
        ref={canvasRef}
        width={800}
        height={600}
      />
      <RightButton path="/game/livingroom" text="거실" />
    </>
  );
}

Kitchen.propTypes = {
  showPuzzle: PropTypes.func.isRequired
};

export default Kitchen;
