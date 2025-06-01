if (confirm("Почати тестування?")) {
  const multipleArray = [
    [10, 9, 8, 7, 6, 5],
    [0, 1, 2, 3, 4, 5],
    [1, 95, 18, 7, 66, 50],
    [20, 11, 32, 83, 94, 5],
  ];

  // знаходження сумми
  const getSumElementArray = (
    array,
    startPositionRow,
    endPositionRow,
    startPositionCol,
    endPositionCol
  ) => {
    let sum = 0;
    for (
      let rowIndex = startPositionRow;
      rowIndex < endPositionRow;
      rowIndex++
    ) {
      for (
        let colIndex = startPositionCol;
        colIndex < endPositionCol;
        colIndex++
      ) {
        sum += array[rowIndex][colIndex];
      }
    }
    return sum;
  };

  //1) номери рядків від 0 до половини, стовпці від 0 до половини
  let halfRow = multipleArray.length / 2;
  let halfCol = multipleArray[halfRow].length / 2;
  const sumOne = getSumElementArray(multipleArray, 0, halfRow, 0, halfCol);
  document.write(`1) = ${sumOne}<br>`);

  //2) номери рядків від 0 до половини, стовпці від половини до кінця
  let rowLength = multipleArray[0].length;
  const sumTwo = getSumElementArray(
    multipleArray,
    0,
    halfRow,
    halfCol,
    rowLength
  );
  document.write(`2) = ${sumTwo}<br>`);

  //3)номери рядків від половини до кінця, стовпці від 0 до половини
  let arrLength = multipleArray.length;
  const sumThree = getSumElementArray(
    multipleArray,
    halfRow,
    arrLength,
    0,
    halfCol
  );
  document.write(`3) = ${sumThree}<br>`);

  //4) номери рядків від половини до кінця , стовпці від половини до кінця
  const sumFour = getSumElementArray(
    multipleArray,
    halfRow,
    arrLength,
    halfCol,
    rowLength
  );
  document.write(`4) = ${sumFour}<br>`);

  // 5)Суму парних рядків
  let sumPairedRows = 0;
  for (let rowIndex = 0; rowIndex < multipleArray.length; rowIndex++) {
    if (rowIndex % 2 === 0) {
      sumPairedRows = multipleArray[rowIndex].reduce(
        (prevEl, el) => prevEl + el
      );
    }
  }
  document.write(`5) = ${sumPairedRows}<br>`);
  // 6)Суму непарних стовпців
  let sumUnpairedColumns = 0;
  for (let rowIndex = 0; rowIndex < multipleArray.length; rowIndex++) {
    for (
      let colIndex = 0;
      colIndex < multipleArray[rowIndex].length;
      colIndex++
    ) {
      if (colIndex % 2 !== 0) {
        sumUnpairedColumns += multipleArray[rowIndex][colIndex];
      }
    }
  }
  document.write(`6) = ${sumUnpairedColumns}<br>`);
  //7) У парних рядках – непарні стовпці, у непарних – парні
  let totalSum = 0;
  for (let rowIndex = 0; rowIndex < multipleArray.length; rowIndex++) {
    for (
      let colIndex = 0;
      colIndex < multipleArray[rowIndex].length;
      colIndex++
    ) {
      if (
        (rowIndex % 2 == 0 && colIndex % 2 !== 0) ||
        (rowIndex % 2 !== 0 && colIndex % 2 == 0)
      ) {
        totalSum += multipleArray[rowIndex][colIndex];
      }
    }
  }
  document.write(`7) = ${totalSum}<br>`);
}
