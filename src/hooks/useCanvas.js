import { useEffect } from "react";

import { loadImage, drawImage, runCursorAnimation } from "../utils/canvas";

const useCanvas = (canvasRef, images, runImageAction) => {
  useEffect(() => {
    (async () => {
      const canvas = canvasRef.current;
      const context = canvas.getContext("2d");

      for (const image of images) {
        const loadedImage = await loadImage(image.src);
        await drawImage(context, loadedImage, image.x, image.y, image.width, image.height);
      }

      runCursorAnimation(canvas, context, images, runImageAction);
    })();
  }, []);
};

export default useCanvas;
