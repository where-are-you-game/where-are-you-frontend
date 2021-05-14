const getMousePosition = (canvas, event) => {
  const rect = canvas.getBoundingClientRect();
  const mouseX = event.clientX - rect.left;
  const mouseY = event.clientY - rect.top;
  return { mouseX, mouseY };
};

const isMouseXOnImage = (mouseX, imageX, imageWidth) => {
  return mouseX > imageX && mouseX < imageX + imageWidth;
};

const isMouseYOnImage = (mouseY, imageY, imageHeight) => {
  return mouseY > imageY && mouseY < imageY + imageHeight;
};

const getOverlayImage = (mouseX, mouseY, currentImage, overlayImages, allImages) => {
  let overlayImage = currentImage;

  allImages.forEach((image) => {
    if (overlayImages.includes(image.object)) {
      if (isMouseXOnImage(mouseX, image.x, image.width) && isMouseYOnImage(mouseY, image.y, image.height)) {
        overlayImage = image;
      }
    }
  });

  return overlayImage;
};

export const drawImage = (context, img, x, y, width, height) => {
  const image = new Image();
  image.src = img;
  image.onload = () => {
    context.drawImage(image, x, y, width, height);
  };
};

const removeImage = (context, x, y, width, height) => {
  context.clearRect(x, y, width, height);
};

const checkOverlayImage = (image, mouseX, mouseY, images) => {
  let currentImage = image;

  if (image.overlayObjects) {
    currentImage = getOverlayImage(mouseX, mouseY, currentImage, image.overlayObjects, images);
  }

  return currentImage;
};

const checkAfterImage = (image, context) => {
  if (image.srcAfter) {
    const originSrc = image.src;
    const afterSrc = image.srcAfter;
    image.src = afterSrc;
    image.srcAfter = originSrc;

    removeImage(context, image.x, image.y, image.width, image.height);
    drawImage(context, afterSrc, image.x, image.y, image.width, image.height);
  }
};

const runImageEvent = (canvas, context, images, action, event) => {
  const { mouseX, mouseY } = getMousePosition(canvas, event);

  for (const image of images) {
    if (
      isMouseXOnImage(mouseX, image.x, image.width)
      && isMouseYOnImage(mouseY, image.y, image.height)
    ) {
      const currentImage = checkOverlayImage(image, mouseX, mouseY, images);

      checkAfterImage(currentImage, context);
      action(currentImage);
      break;
    }
  }
};

export const runCursorEvent = (canvas, context, images, action) => {
  const circle = document.getElementById("circle");

  canvas.addEventListener("mousemove", (event) => {
    const { mouseX, mouseY } = getMousePosition(canvas, event);

    circle.style.opacity = 0.6;
    circle.style.left = `${mouseX - 20}px`;
    circle.style.top = `${mouseY - 20}px`;

    if (mouseX < 30 || mouseX > canvas.width - 30 || mouseY < 30 || mouseY > canvas.height - 30) {
      circle.style.opacity = 0.6;
      circle.style.left = "-9999px";
      circle.style.top = "-9999px";
    }
  });

  circle.addEventListener("click", (event) => {
    console.log("circle");
    runImageEvent(canvas, context, images, action, event);
  });

  circle.removeEventListener("click", (event) => {
    runImageEvent(canvas, context, images, action, event);
  });
};

export const clickImage = (canvas, context, images, action) => (
  canvas.addEventListener("click", (event) => {
    runImageEvent(canvas, context, images, action, event);
  })
);
