import React, { useRef, useEffect } from "react";

import OBJECT from "../../../constants/livingroom.js";
import { drawImage, clickImage } from "../../../utils/canvas";
import LeftButton from "../../Shared/LeftButton";
import RightButton from "../../Shared/RightButton";

function LivingRoom() {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    for (const object in OBJECT) {
      const image = OBJECT[object];
      drawImage(context, image.src, image.x, image.y, image.width, image.height);
    }

    clickImage(canvas, OBJECT);
  }, []);

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

export default LivingRoom;
