if (confirm("Почати тестування?")) {
  function getDisplaysImagesOnScreen(img1, img2, img3, img4) {
    let randomeImage = 1 + Math.floor(Math.random() * 4);
    let result;
    if (randomeImage == 1) result = img1;
    if (randomeImage == 2) result = img2;
    if (randomeImage == 3) result = img3;
    if (randomeImage == 4) result = img4;
    return result;
  }
  let img1 = `./img/img1.jpg`;
  let img2 = `./img/img2.jpg`;
  let img3 = `./img/img3.jpg`;
  let img4 = `./img/img4.jpg`;
  document.write(
    `<img src="${getDisplaysImagesOnScreen(img1, img2, img3, img4)}">`
  );
}
