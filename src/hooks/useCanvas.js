import { useEffect } from "react";

import { drawImage, clickImage } from "../utils/canvas";

const useCanvas = (canvasRef, objects, showPuzzle) => {
  return useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    for (const object in objects) {
      const image = objects[object];
      drawImage(context, image.src, image.x, image.y, image.width, image.height);
    }

    clickImage(canvas, objects, showPuzzle);
  }, []);
};

export default useCanvas;
