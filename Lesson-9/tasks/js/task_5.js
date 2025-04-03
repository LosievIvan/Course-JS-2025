if (confirm("Почати тестування?")) {
  function getProductOfPlusNumbers(arr) {
    let sum = 1;
    for (const element of arr) {
      if (element > 0) sum *= element;
    }
    return sum;
  }
  const arrElements = [
    20, -110, 65, 45, -78, 120, -5, 4, -332, 101, 45, -70, -14,
  ];
  document.write(`totalRezult: ${getProductOfPlusNumbers(arrElements)}`);
}
