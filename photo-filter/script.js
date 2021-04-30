const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const reader = new FileReader();
const img = new Image();

function uploadImage(e) {
  reader.onload = () => {
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
    };

    img.src = reader.result;
  };

  reader.readAsDataURL(e.target.files[0]);
}

function grayscale() {
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const data = imageData.data;

  for (let i = 0; i < data.length; i += 4) {
    const grey = data[i] * 0.21 + data[i + 1] * 0.71 + data[i + 2] * 0.07;
    data[i] = grey;
    data[i + 1] = grey;
    data[i + 2] = grey;
  }
  ctx.putImageData(imageData, 0, 0);
}

function sepia() {
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const data = imageData.data;

  for (let i = 0; i < data.length; i += 4) {
    const grey = data[i] * 0.21 + data[i + 1] * 0.71 + data[i + 2] * 0.07;
    data[i] = grey + 95;
    data[i + 1] = grey + 58;
    data[i + 2] = grey;
  }
  ctx.putImageData(imageData, 0, 0);
}

function invert() {
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const data = imageData.data;

  for (let i = 0; i < data.length; i += 4) {
    data[i] = 255 - data[i];
    data[i + 1] = 255 - data[i + 1];
    data[i + 2] = 255 - data[i + 2];
  }

  ctx.putImageData(imageData, 0, 0);
}

function rbg() {
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const data = imageData.data;

  for (let i = 0; i < data.length; i += 4) {
    const green = data[i + 1];
    data[i] = data[i];
    data[i + 1] = data[i + 2];
    data[i + 2] = green;
  }

  ctx.putImageData(imageData, 0, 0);
}

function bgr() {
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const data = imageData.data;

  for (let i = 0; i < data.length; i += 4) {
    const red = data[i];
    data[i] = data[i + 2];
    data[i + 1] = data[i + 1];
    data[i + 2] = red;
  }

  ctx.putImageData(imageData, 0, 0);
}

function gbr() {
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const data = imageData.data;

  for (let i = 0; i < data.length; i += 4) {
    const red = data[i];
    data[i] = data[i + 1];
    data[i + 1] = data[i + 2];
    data[i + 2] = red;
  }

  ctx.putImageData(imageData, 0, 0);
}

function grb() {
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const data = imageData.data;

  for (let i = 0; i < data.length; i += 4) {
    const red = data[i];
    data[i] = data[i + 1];
    data[i + 1] = red;
    data[i + 2] = data[i + 2];
  }

  ctx.putImageData(imageData, 0, 0);
}

function clear() {
  img.src = reader.result;
}

function download() {
  const image = canvas.toDataURL();
  const link = document.createElement("a");
  link.href = image;
  link.download = "image.png";
  link.click();
}

const buttons = document.querySelectorAll("button");

buttons[0].addEventListener("click", grayscale);
buttons[1].addEventListener("click", sepia);
buttons[2].addEventListener("click", invert);
buttons[3].addEventListener("click", rbg);
buttons[4].addEventListener("click", bgr);
buttons[5].addEventListener("click", gbr);
buttons[6].addEventListener("click", grb);
buttons[7].addEventListener("click", clear);
buttons[8].addEventListener("click", download);

const imageLoader = document.getElementById("upload");
imageLoader.addEventListener("change", uploadImage);
