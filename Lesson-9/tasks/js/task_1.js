if (confirm("Почати тестування?")) {
  function getArrayElements() {
    const elements = parseInt(
      prompt("Введіть кількість елементів масиву", "6")
    );
    return new Array(elements).fill(0);
  }
  document.write(getArrayElements());
}
