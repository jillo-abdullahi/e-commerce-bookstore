import { type Crop } from "react-image-crop";

/**
 * @description - Function to crop image. Draws cropped image on canvas and returns it in base64 format.
 * @param {string} imageSrc
 * @param {object} crop
 * @returns {string} image
 * */

function getCroppedImg(imageSrc: string, crop: Crop) {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  const image = new Image();
  image.src = imageSrc;

  const scaleX = image.naturalWidth / image.width;
  const scaleY = image.naturalHeight / image.height;

  canvas.width = crop.width;
  canvas.height = crop.height;

  ctx &&
    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width * scaleX,
      crop.height * scaleY
    );

  // get base64 encoded image
  return canvas.toDataURL("image/jpeg");
}

export default getCroppedImg;
