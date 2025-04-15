if (confirm("Почати тестування?")) {
  //  масив з рандомними цінами
  function getRandomStockPrices(numberPrices, max = 10000, min = 1) {
    const arrayPraces = [];
    for (let num = 0; num < numberPrices; num++) {
      let randomPrices = Math.floor(Math.random() * (max - min + 1)) + min;
      arrayPraces.push(randomPrices);
    }
    return arrayPraces;
  }
  //  ціни більше 1000
  const getNewArrPriceMore_1000 = (array, baseValue = 1000) =>
    array.filter((price) => price > baseValue);

  // номера цінних паперів більше 1000
  const getNewArrIndexMore_1000 = (array, baseValue = 1000) =>
    array.reduce((newArray, price, num) => {
      if (price > baseValue) newArray.push(num + 1);
      return newArray;
    }, []);

  // список цін більше за попередне значення
  const getPricesHigherPreviousOnes = (array) => {
    let newArr = [];
    array.reduce((prevPrice, priceTwo) =>
      priceTwo < prevPrice ? newArr.push(prevPrice) : priceTwo
    );
    return newArr;
  };

  //значення цін у відсотках стосовно максимального
  const getValueOfPricesPercentageRelativeMax = (array, percent = 100) => {
    //  let maxPrice =Math.max(...array)
    let maxPrice = array.reduce((prevMax, num) =>
      num > prevMax ? num : prevMax
    );
    return array.map((price) => Math.ceil((price / maxPrice) * percent));
  };

  //  Підрахувати кількість змін цін
  const getPriceChanges = (array) => {
    return array.reduce((prevCount, price) => {
      if (!prevCount.includes(price)) prevCount.push(price);
      return prevCount;
    }, []).length;
  };
  //   const getPriceChanges = (array) => {
  //     return array.slice(1).filter((el, ind) => el !== array[ind]).length;
  //   };

  //Визначити, чи є ціна, що менше 1000
  const getPriceLess_1000 = (array, baseValue = 1000) =>
    array.some((price) => price < baseValue);

  //Визначати, чи усі ціни більше за 1000
  const getPricesMore_1000 = (array, baseValue = 1000) =>
    array.every((price) => price > baseValue);

  //Підрахувати кількість цін, що більше за 1000
  const getValuePriceMore_1000 = (array, baseValue = 1000) =>
    array.reduce((count, price) => (price > baseValue ? count + 1 : count), 0);
  //const getValuePriceMore_1000 = (array, baseValue = 1000) =>
  //   array.filter(price => price > baseValue).length;

  //Підрахувати суму цін, що більше за 1000
  const getSumPriceMore_1000 = (array, baseValue = 1000) =>
    array.reduce(
      (prevPrice, price) => (price > baseValue ? prevPrice + price : prevPrice),
      0
    );

  //Знайти першу ціну, що більше за 1000
  const getFirstPriceMore_1000 = (array, baseValue = 1000) =>
    array.find((price) => price > baseValue);

  //Знайти індекс першої ціни, що більше за 1000
  const getIndexFirstPricemore_1000 = (array, baseValue = 1000) =>
    array.findIndex((price) => price > baseValue);

  //Знайти останню ціну, що більше за 1000
  const getLastPriceMore_1000 = (array, baseValue = 1000) =>
    array.findLast((price) => price > baseValue);

  //Знайти індекс останньої ціни, що більше за 1000
  const getIndexLastPricemore_1000 = (array, baseValue = 1000) =>
    array.findLastIndex((price) => price > baseValue);

  let userNumPrices = parseInt(prompt("Введіть кількіть цінних паперів", "13"));

  const arrRandomPrices = getRandomStockPrices(userNumPrices);
  const newArrMore_1000 = getNewArrPriceMore_1000(arrRandomPrices);
  const newArrIndexMore_1000 = getNewArrIndexMore_1000(arrRandomPrices);
  const pricesHigherPreviousOnes = getPricesHigherPreviousOnes(arrRandomPrices);
  const valueOfPricesPercentageRelativeMax =
    getValueOfPricesPercentageRelativeMax(arrRandomPrices);
  const priceChanges = getPriceChanges(arrRandomPrices);
  const priceLess_1000 = getPriceLess_1000(arrRandomPrices);
  const pricesMore_1000 = getPricesMore_1000(arrRandomPrices);
  const valuePriceMore_1000 = getValuePriceMore_1000(arrRandomPrices);
  const sumPriceMore_1000 = getSumPriceMore_1000(arrRandomPrices);
  const firstPriceMore_1000 = getFirstPriceMore_1000(arrRandomPrices);
  const indexFirstPricemore_1000 = getIndexFirstPricemore_1000(arrRandomPrices);
  const lastPriceMore_1000 = getLastPriceMore_1000(arrRandomPrices);
  const indexLastPriceMore_1000 = getIndexLastPricemore_1000(arrRandomPrices);

  document.write(`Ціни на цінні папери: ${arrRandomPrices}<br>`);
  document.write(`1) Ціни більше за 1000грн= ${newArrMore_1000}<br>`);
  document.write(
    `2) Номера Цін більше за 1000грн= ${newArrIndexMore_1000}<br>`
  );
  document.write(`3) Список цін більше за попередне значення
	= ${pricesHigherPreviousOnes}<br>`);
  document.write(
    `4) Значення цін у відсотках стосовно максимального= ${valueOfPricesPercentageRelativeMax}<br>`
  );
  document.write(`5)Підрахувати кількість змін цін = ${priceChanges}<br>`);
  document.write(
    `6)Визначити, чи є ціна, що менше 1000 = ${priceLess_1000}<br>`
  );
  document.write(
    `7)Визначати, чи усі ціни більше за 1000 = ${pricesMore_1000}<br>`
  );
  document.write(
    `8)Підрахувати кількість цін, що більше за 1000 = ${valuePriceMore_1000}<br>`
  );
  document.write(
    `9)Підрахувати суму цін, що більше за 1000 = ${sumPriceMore_1000}<br>`
  );
  document.write(
    `10)Знайти першу ціну, що більше за 1000 = ${firstPriceMore_1000}<br>`
  );
  document.write(
    `11)Знайти індекс першої ціни, що більше за 1000 = ${indexFirstPricemore_1000}<br>`
  );
  document.write(
    `12)Знайти останню ціну, що більше за 1000 = ${lastPriceMore_1000}<br>`
  );
  document.write(
    `13)Знайти індекс останньої ціни, що більше за 1000 = ${indexLastPriceMore_1000}<br>`
  );
}
