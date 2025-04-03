if (confirm("Почати тестування?")) {
  function getElementsMore_100(arr) {
    const newArr = [];
    const baseValue = 100;
    for (const element of arr) {
      if (element > baseValue) newArr.push(element);
    }
    return newArr;
  }
  const arrElements = [20, 110, 65, 45, 78, 120, 5, 4, 332, 101, 45, 70, 14];
  document.write(`totalRezult: ${getElementsMore_100(arrElements)}`);
}
