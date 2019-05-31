// we can refer to self.adddEventListener, self.postMessage... or just without self keyword.
addEventListener("message", e => {
  const {
    data: { data, width, height },
    data: imageData
  } = e;
  console.log("self object is: ", self);
  for (let x = 0; x < height; x++) {
    for (let y = 0; y < width; y++) {
      // RGBA [0, 1, 2, 3]
      // iterate each 4th element of array
      let index = (y + x * width) * 4;
      data[index + 3] = 255 / 4; // opacity 25%
      //data[index] *= 1.5; // make image more RED
    }
  }
  postMessage(imageData);
});
