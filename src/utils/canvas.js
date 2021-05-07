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

export const clickImage = (canvas, objects) => {
  canvas.addEventListener("click", (event) => {
    const { mouseX, mouseY } = getMousePosition(canvas, event);

    for (const object in objects) {
      const image = objects[object];

      if (
        (mouseX > image.x && mouseX < image.x + image.width)
        && (mouseY > image.y && mouseY < image.y + image.height)
      ) {
        console.log(image.text);
      }
    }
  });
};
