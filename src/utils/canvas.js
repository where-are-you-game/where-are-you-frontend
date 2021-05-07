const getMousePosition = (canvas, event) => {
  const rect = canvas.getBoundingClientRect();
  const mouseX = event.clientX - rect.left;
  const mouseY = event.clientY - rect.top;
  return { mouseX, mouseY };
};

export const drawImage = (context, img, x, y, width, height) => {
  const image = new Image();
  image.src = img;
  image.onload = () => {
    context.drawImage(image, x, y, width, height);
  };
};

export const clickImage = (canvas, objects, callback) => {
  canvas.addEventListener("click", (event) => {
    const { mouseX, mouseY } = getMousePosition(canvas, event);

    for (const image in objects) {
      const object = objects[image];

      if (
        (mouseX > object.x && mouseX < object.x + object.width)
        && (mouseY > object.y && mouseY < object.y + object.height)
      ) {
        callback(object);
        return;
      }
    }
  });
};
