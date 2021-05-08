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

export const removeImage = (context, x, y, width, height) => {
  context.clearRect(x, y, width, height);
};

export const clickImage = (canvas, context, images, callback) => {
  canvas.addEventListener("click", (event) => {
    const { mouseX, mouseY } = getMousePosition(canvas, event);

    for (const image of images) {
      let currentImage = image;

      if (
        isMouseXOnImage(mouseX, image.x, image.width)
        && isMouseYOnImage(mouseY, image.y, image.height)
      ) {

        if (image.overlayObjects) {
          currentImage = getOverlayImage(mouseX, mouseY, currentImage, image.overlayObjects, images);
        }

        if (currentImage.srcAfter) {
          const originSrc = currentImage.src;
          const afterSrc = currentImage.srcAfter;
          currentImage.src = afterSrc;
          currentImage.srcAfter = originSrc;

          removeImage(context, currentImage.x, currentImage.y, currentImage.width, currentImage.height);
          drawImage(context, afterSrc, currentImage.x, currentImage.y, currentImage.width, currentImage.height);
        }

        callback(currentImage);
        return;
      }
    }
  });
};
