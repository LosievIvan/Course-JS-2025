if (confirm("Почати тестування?")) {
  function getArrayElements() {
    const elements = parseInt(
      prompt("Введіть кількість елементів масиву", "7")
    );
    let newElementArr = new Array(elements).fill(1, 0, 5);
    newElementArr.fill(7, 5);
    return newElementArr;
  }
  document.write(getArrayElements());
}
