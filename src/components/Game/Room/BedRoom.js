import React, { useRef } from "react";

import PropTypes from "prop-types";

import bedroomObjects from "../../../constants/bedroom";
import useCanvas from "../../../hooks/useCanvas";
import LeftButton from "../../Shared/LeftButton";
import RightButton from "../../Shared/RightButton";

function BedRoom({ showPuzzle }) {
  const canvasRef = useRef();

  useCanvas(canvasRef, bedroomObjects, showPuzzle);

  return (
    <>
      <LeftButton path="/game/livingroom" text="거실" />
      <canvas
        ref={canvasRef}
        width={800}
        height={600}
      />
      <RightButton path="/game/catroom" text="고양이방" />
    </>
  );
}

BedRoom.propTypes = {
  showPuzzle: PropTypes.func.isRequired
};

export default BedRoom;
