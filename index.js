const input = document.querySelector("#input");
const preview = document.querySelector("#preview");
const galery = document.querySelector(".galery");

const previewCtx = preview.getContext("2d");

const worker = new Worker("worker.js");

worker.addEventListener("message", e => {
  const imageData = e.data;
  previewCtx.putImageData(imageData, 0, 0);
});

function applyFilter() {
  const imageData = previewCtx.getImageData(
    0,
    0,
    preview.width,
    preview.height
  );
  worker.postMessage(imageData);
}

input.addEventListener("change", e => {
  const file = e.target.files[0];
  createImageBitmap(file).then(bitmap => {
    preview.width = bitmap.width;
    preview.height = bitmap.height;
    previewCtx.drawImage(bitmap, 0, 0);
    console.log(bitmap);
    applyFilter();
  });
});
