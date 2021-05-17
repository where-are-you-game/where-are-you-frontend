import { useEffect } from "react";

import { runCursorEffect } from "../utils/canvas";
import Item from "../utils/canvasItem";

const useCanvas = (room, canvasRef, items, runImageAction) => {
  useEffect(() => {
    (async () => {
      const canvas = canvasRef.current;
      const context = canvas.getContext("2d");
      const circle = document.getElementById("circle");
      const drawnItems = [];

      context.clearRect(0, 0, canvas.width, canvas.height);

      for (const item of items) {
        const image = new Item(item);
        await image.draw(context);
        drawnItems.push(image);
      }

      circle.addEventListener("click", (event) => {
        for (const item of drawnItems) {
          item.runEvent(drawnItems, canvas, context, event, runImageAction);
        }
      });

      canvas.addEventListener("mousemove", (event) => {
        runCursorEffect(circle, canvas, event, drawnItems);
      });
    })();
  }, [room]);
};

export default useCanvas;
