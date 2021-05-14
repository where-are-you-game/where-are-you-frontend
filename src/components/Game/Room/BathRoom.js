import React, { useRef } from "react";

import PropTypes from "prop-types";

import bathroomObjects from "../../../constants/bathroom";
import useCanvas from "../../../hooks/useCanvas";
import LeftButton from "../../Shared/LeftButton";

function BathRoom({ runImageAction }) {
  const canvasRef = useRef();

  useCanvas(canvasRef, bathroomObjects, runImageAction);

  return (
    <>
      <LeftButton path="/game/room/catroom" text="고양이방" />
      <canvas
        ref={canvasRef}
        width={800}
        height={600}
      />
    </>
  );
}

BathRoom.propTypes = {
  runImageAction: PropTypes.func.isRequired
};

export default BathRoom;
