if (confirm("Почати тестування?")) {
  function getArrayPaidTax(arr) {
    const tax_20 = 0.2;
    return arr.map((price) => price * tax_20);
  }
  const arrayPrices = [1000, 850, 457, 600, 125, 99];
  document.write(`totalRezult: ${getArrayPaidTax(arrayPrices)}`);
}
