if (confirm("Почати тестування?")) {
  function getOperationsElements(arr) {
    const newArrElements = arr.map((element, index, arr) =>
      element > arr[0] ? element * 2 : element
    );
    return newArrElements;
  }
  const arrElements = [6, 4, 5, 8, 8, 10, 9, 7, 1, 2, 5, 7, 6];
  document.write(`totalRezult: ${getOperationsElements(arrElements)}`);
}
