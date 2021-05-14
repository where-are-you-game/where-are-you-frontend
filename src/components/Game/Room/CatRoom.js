import React, { useRef } from "react";

import PropTypes from "prop-types";

import catroomObjects from "../../../constants/catroom";
import useCanvas from "../../../hooks/useCanvas";
import LeftButton from "../../Shared/LeftButton";
import RightButton from "../../Shared/RightButton";

function BedRoom({ runImageAction }) {
  const canvasRef = useRef();

  useCanvas(canvasRef, catroomObjects, runImageAction);

  return (
    <>
      <LeftButton path="/game/room/bedroom" text="방" />
      <canvas
        ref={canvasRef}
        width={800}
        height={600}
      />
      <RightButton path="/game/room/bathroom" text="화장실" />
    </>
  );
}

BedRoom.propTypes = {
  runImageAction: PropTypes.func.isRequired
};

export default BedRoom;
