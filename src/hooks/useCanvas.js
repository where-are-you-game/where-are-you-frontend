import { useEffect } from "react";

import { drawImage, clickImage } from "../utils/canvas";

const useCanvas = (canvasRef, images, showPuzzle) => {
  return useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    for (const image of images) {
      drawImage(context, image.src, image.x, image.y, image.width, image.height);
    }

    clickImage(canvas, context, images, showPuzzle);
  }, [showPuzzle]);
};

export default useCanvas;
