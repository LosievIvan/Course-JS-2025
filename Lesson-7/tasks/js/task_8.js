if (confirm("Почати тестування?")) {
  function getBannerOutput(images, title, link) {
    let bannerResult = `<a href="${link}"><h3>${title}</h3></a>
	  <a href="${link}"><img src="${images}"></a>`;
    return bannerResult;
  }
}
const images = `./img/img4.jpg`;
const link = `https://www.google.com/search`;
const title = `sad Smiley`;

document.write(getBannerOutput(images, title, link));
