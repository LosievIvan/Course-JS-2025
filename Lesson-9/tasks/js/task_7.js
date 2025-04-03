if (confirm("Почати тестування?")) {
  function getDiscountedGoods(arr) {
    const baseValue = 1000;
    const discount = 0.7;
    arr.forEach((element, index, arr) => {
      if (element > baseValue) arr[index] *= discount;
    });
    return arr;
  }
  const arrPrices = [
    500, 1200, 1100, 85, 458, 954, 2200, 4200, 1050, 25, 1010, 30, 654, 741,
  ];
  document.write(`totalRezult: ${getDiscountedGoods(arrPrices)}`);
}
//   return arr.map(price => price > baseValue ? price * discount : price);
// }
