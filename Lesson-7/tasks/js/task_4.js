if (confirm("Почати тестування?")) {
  function getTotalResult(num1, num2, num3) {
    let numberOfPairedNumbers = 0;
    let numberOfPlusNumbers = 0;
    let numberOfNumbersHundred = 0;
    if (num1 % 2 == 0) numberOfPairedNumbers++;
    if (num2 % 2 == 0) numberOfPairedNumbers++;
    if (num3 % 2 == 0) numberOfPairedNumbers++;

    if (num1 > 0) numberOfPlusNumbers++;
    if (num2 > 0) numberOfPlusNumbers++;
    if (num3 > 0) numberOfPlusNumbers++;

    if (num1 > 100) numberOfNumbersHundred++;
    if (num2 > 100) numberOfNumbersHundred++;
    if (num3 > 100) numberOfNumbersHundred++;
    return `Кількість парних:${numberOfPairedNumbers}<br>Кількість додатних:${numberOfPlusNumbers} <br>Кількість більших за 100:${numberOfNumbersHundred}<br>`;
  }
  document.write(getTotalResult(120, 99, -12));
}
