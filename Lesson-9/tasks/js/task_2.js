if (confirm("Почати тестування?")) {
  function getArrayElements() {
    const elements = parseInt(
      prompt("Введіть кількість елементів масиву", "6")
    );
    let newElementArr = new Array(elements).fill(7);
    const middleArr = Math.floor(elements / 2);
    newElementArr.fill(1, 0, middleArr);
    return newElementArr;
  }
  document.write(getArrayElements());
}
