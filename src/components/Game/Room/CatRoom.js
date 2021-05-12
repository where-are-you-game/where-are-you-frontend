import React, { useRef } from "react";

import PropTypes from "prop-types";

import catroomObjects from "../../../constants/catroom";
import useCanvas from "../../../hooks/useCanvas";
import LeftButton from "../../Shared/LeftButton";

function BedRoom({ runImageAction }) {
  const canvasRef = useRef();

  useCanvas(canvasRef, catroomObjects, runImageAction);

  return (
    <>
      <LeftButton path="/game/bedroom" text="방" />
      <canvas
        ref={canvasRef}
        width={800}
        height={600}
      />
    </>
  );
}

BedRoom.propTypes = {
  runImageAction: PropTypes.func.isRequired
};

export default BedRoom;
