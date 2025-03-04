if (confirm("Почати тестування?")) {
  function getSum(num1, num2, num3, num4) {
    return num1 + num2 + num3 + num4;
  }
  function getMultiplication(num1, num2, num3, num4) {
    return num1 * num2 * num3 * num4;
  }
  function getArithmeticMean(num1, num2, num3, num4) {
    return (num1 + num2 + num3 + num4) / 4;
  }
  function getMinimumValue(num1, num2, num3, num4) {
    return Math.min(num1, num2, num3, num4);
  }

  let num1 = parseInt(prompt("Введіть перше чісло:", "3"));
  let num2 = parseInt(prompt("Введіть перше чісло:", "10"));
  let num3 = parseInt(prompt("Введіть перше чісло:", "15"));
  let num4 = parseInt(prompt("Введіть перше чісло:", "24"));

  document.write(`сума = ${getSum(num1, num2, num3, num4)}<br>
  добуток = ${getMultiplication(num1, num2, num3, num4)}<br>
  середнє арифметичне = ${getArithmeticMean(num1, num2, num3, num4)}<br>
  мінімальне значення = ${getMinimumValue(num1, num2, num3, num4)}`);
}
