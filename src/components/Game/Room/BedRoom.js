import React, { useRef } from "react";

import PropTypes from "prop-types";

import bedroomObjects from "../../../constants/bedroom";
import useCanvas from "../../../hooks/useCanvas";
import LeftButton from "../../Shared/LeftButton";
import RightButton from "../../Shared/RightButton";

function BedRoom({ runImageAction }) {
  const canvasRef = useRef();

  useCanvas(canvasRef, bedroomObjects, runImageAction);

  return (
    <>
      <LeftButton path="/game/room/livingroom" text="거실" />
      <canvas
        ref={canvasRef}
        width={800}
        height={600}
      />
      <RightButton path="/game/room/catroom" text="고양이방" />
    </>
  );
}

BedRoom.propTypes = {
  runImageAction: PropTypes.func.isRequired
};

export default BedRoom;
