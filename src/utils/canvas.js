const getMousePosition = (canvas, event) => {
  const rect = canvas.getBoundingClientRect();
  const mouseX = event.clientX - rect.left;
  const mouseY = event.clientY - rect.top;
  return { mouseX, mouseY };
};

const isMouseXOnImage = (mouseX, imageX, imageWidth) => (
  mouseX > imageX && mouseX < imageX + imageWidth
);

const isMouseYOnImage = (mouseY, imageY, imageHeight) => (
  mouseY > imageY && mouseY < imageY + imageHeight
);

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

export const loadImage = (img) => {
  return new Promise((resolve) => {
    const image = new Image();

    image.src = img;
    image.onload = () => {
      if (image.complete) {
        resolve(image);
      }
    };
  });
};

export const drawImage = (context, image, x, y, width, height) => {
  context.drawImage(image, x, y, width, height);
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

const checkAfterImage = async (image, context) => {
  if (image.srcAfter) {
    const originSrc = image.src;
    const afterSrc = image.srcAfter;
    image.src = afterSrc;
    image.srcAfter = originSrc;

    removeImage(context, image.x, image.y, image.width, image.height);
    const loadedImage = await loadImage(afterSrc);
    drawImage(context, loadedImage, image.x, image.y, image.width, image.height);
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

export const runCursorAnimation = (canvas, context, images, action) => {
  const circle = document.getElementById("circle");

  const runImageAction = (event) => {
    runImageEvent(canvas, context, images, action, event);
    circle.removeEventListener("click", runImageAction);
  };

  canvas.addEventListener("mousemove", (event) => {
    const { mouseX, mouseY } = getMousePosition(canvas, event);

    circle.style.opacity = 0.6;
    circle.style.left = `${mouseX - 20}px`;
    circle.style.top = `${mouseY - 20}px`;

    circle.addEventListener("click", runImageAction);

    if (mouseX < 30 || mouseX > canvas.width - 30 || mouseY < 30 || mouseY > canvas.height - 30) {
      circle.style.opacity = 0.6;
      circle.style.left = "-9999px";
      circle.style.top = "-9999px";
    }
  });

};

export const clickImage = (canvas, context, images, action) => (
  canvas.addEventListener("click", (event) => {
    runImageEvent(canvas, context, images, action, event);
  })
);
