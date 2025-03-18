if (confirm("Почати тестування?")) {
  const arrPayments = [
    250, 485, 100, 365, 990, 899, 730, 800, 410, 125, 487, 559,
  ];
  function getTotalAmountOfPayments(arr, initialValue, finalValue) {
    let sum = 0;
    for (let month = initialValue; month <= finalValue; month++) {
      sum += arr[month];
    }
    return sum;
  }
  let getpairedMonth = () => {
    let sum = 0;
    for (let i = 1; i < arrPayments.length; i += 2) {
      sum += arrPayments[i];
    }
    return sum;
  };
  let startOfSeason = () => {
    let sum = 0;
    for (let i = 2; i < arrPayments.length; i += 3) {
      sum += arrPayments[i];
    }
    return sum;
  };
  const resultYears = getTotalAmountOfPayments(arrPayments, 0, 11);
  document.write(`за весь рік: ${resultYears}<br>`);
  const resultFirst = getTotalAmountOfPayments(arrPayments, 0, 5);
  document.write(`у першій половині року: ${resultFirst}<br>`);
  const resultLast = getTotalAmountOfPayments(arrPayments, 6, 11);
  document.write(`у другій половині року: ${resultLast}<br>`);
  const resultSummer = getTotalAmountOfPayments(arrPayments, 5, 7);
  document.write(`за літо: ${resultSummer}<br>`);
  const resultSpring = getTotalAmountOfPayments(arrPayments, 2, 4);
  document.write(`за ІІ квартал: ${resultSpring}<br>`);
  const resultPairedMonths = getpairedMonth(arrPayments);
  document.write(`за парні місяці: ${resultPairedMonths}<br>`);
  const resultStartSeason = startOfSeason(arrPayments);
  document.write(
    `місяці, які є початковими у сезоні: ${resultStartSeason}<br>`
  );
}
