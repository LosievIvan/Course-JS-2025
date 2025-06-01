if (confirm("Почати тестування?")) {
  const numberOfStores = parseInt(
    prompt("Введіть кількість магазинів для перевірки:", "4")
  );
  //формування рандомного масиву прибутків К магазинів
  function getStoreRevenuesForWeek(
    numberOfStores,
    daysOfWeek = 7,
    minIncome = 1000,
    maxIncome = 10000
  ) {
    const tableStoreIncome = [];
    for (let indexStore = 0; indexStore < numberOfStores; indexStore++) {
      tableStoreIncome.push([]);
      for (let indexDay = 0; indexDay < daysOfWeek; indexDay++) {
        let randomIncome =
          Math.floor(Math.random() * (maxIncome - minIncome + 1)) + minIncome;
        tableStoreIncome[indexStore].push(randomIncome);
      }
    }
    return tableStoreIncome;
  }
  const resultTable = getStoreRevenuesForWeek(numberOfStores);
  console.log(resultTable);

  //1) загальний прибуток кожного магазину за тиждень
  document.write(`<p>1) загальний прибуток кожного магазину за тиждень:</p>`);
  function getTotalIncomeWeek(arrayStoreIncome) {
    for (
      let storeIndex = 0;
      storeIndex < arrayStoreIncome.length;
      storeIndex++
    ) {
      let sumIncomeWeek = 0;
      for (
        let dayIndex = 0;
        dayIndex < arrayStoreIncome[storeIndex].length;
        dayIndex++
      ) {
        sumIncomeWeek += arrayStoreIncome[storeIndex][dayIndex];
      }
      document.write(
        `Прибуток магазину № ${
          storeIndex + 1
        } за тиждень = ${sumIncomeWeek} грн.<br>`
      );
    }
  }
  getTotalIncomeWeek(resultTable);

  // варіант 2
  //   const getTotalIncomeWeek = (arrayStoreIncome) => {
  //     arrayStoreIncome.forEach((store, index) => {
  //       let sumIncomeWeek = 0;
  //       for (const day of store) {
  //         sumIncomeWeek += day;
  //       }
  //       document.write(
  //         `Прибуток магазину № ${
  //           index + 1
  //         } за тиждень = ${sumIncomeWeek} грн.<br>`
  //       );
  //     });
  //   };
  //   getTotalIncomeWeek(resultTable);

  // 2)загальний прибуток усіх магазинів по дням
  document.write(`<p>2) загальний прибуток усіх магазинів по дням:</p>`);
  const getTotalIncomeStoreOfDays = (arrayStoreIncome) => {
    let sumDays = 0;
    for (let dayIndex = 0; dayIndex < 7; dayIndex++) {
      for (const day of arrayStoreIncome) {
        sumDays += day[dayIndex];
      }
      document.write(
        `Загальний прибуток магазинів за ${
          dayIndex + 1
        }-й день тижня = ${sumDays} грн.<br>`
      );
    }
  };
  let res2 = getTotalIncomeStoreOfDays(resultTable);

  //3) загальний прибуток за робочі дні
  const getTotalIncomeStoreOfWorkingDays = (arrayStoreIncome) => {
    let sumWorkDays = 0;
    for (let dayIndex = 0; dayIndex < 5; dayIndex++) {
      for (const day of arrayStoreIncome) {
        sumWorkDays += day[dayIndex];
      }
    }
    return sumWorkDays;
  };
  let res3 = getTotalIncomeStoreOfWorkingDays(resultTable);
  document.write(
    `<p>3) Загальний прибуток магазинів за робочі дні = ${res3} грн.</p>`
  );

  //4) загальний прибуток за вихідні дні
  const getTotalIncomeStoreOfOffDays = (arrayStoreIncome) => {
    let sumWorkDays = 0;
    for (let dayIndex = 5; dayIndex < 7; dayIndex++) {
      for (const day of arrayStoreIncome) {
        sumWorkDays += day[dayIndex];
      }
    }
    return sumWorkDays;
  };
  let res4 = getTotalIncomeStoreOfOffDays(resultTable);
  document.write(
    `<p>4) Загальний прибуток магазинів за вихідні дні = ${res4} грн.</p>`
  );

  //5) максимальний прибуток за середу
  const getMaxIncomeStoreOfWednesday = (arrayStoreIncome, dayIndex) => {
    let maxIncomeWednesday = 0;
    for (const day of arrayStoreIncome) {
      if (day[dayIndex])
        maxIncomeWednesday = Math.max(maxIncomeWednesday, day[dayIndex]);
    }
    return maxIncomeWednesday;
  };
  let res5 = getMaxIncomeStoreOfWednesday(resultTable, 2);
  document.write(`<p>5) максимальний прибуток за середу = ${res5} грн.</p>`);

  // ---варіант 1
  //   const getMaxIncomeStoreOfWednesday = (arrayStoreIncome, dayIndex) => {
  //     let max = -Infinity;
  //     for (
  //       let storesIndex = 0;
  //       storesIndex < arrayStoreIncome.length;
  //       storesIndex++
  //     ) {
  //       if (arrayStoreIncome[storesIndex][dayIndex] > max)
  //         max = arrayStoreIncome[storesIndex][dayIndex];
  //     }
  //     return max;
  //   };

  //   let res5 = getMaxIncomeStoreOfWednesday(resultTable, 2);
  //   document.write(`<p>5) максимальний прибуток за середу = ${res5} грн.</p>`);

  //-------варіант 2
  //   const getMaxIncomeStoreOfWednesday = (arrayStoreIncome, dayIndex) => {
  //     let maxIncomeWednesday = arrayStoreIncome.reduce(
  //       (maxIncome, income) =>
  //         income[dayIndex] > maxIncome ? income[dayIndex] : maxIncome,
  //       -Infinity
  //     );
  //     return maxIncomeWednesday;
  //   };
  //   let res5 = getMaxIncomeStoreOfWednesday(resultTable, 2);
  //   document.write(`<p>5) максимальний прибуток за середу = ${res5} грн.</p>`);
  //6) сформувати загальний список (одновимірний масив) зі значенням, які що більші за 2000
  const getListIncomeOver_2000 = (arrayStoreIncome, baseValue) => {
    return arrayStoreIncome
      .flat(Infinity)
      .filter((income) => income > baseValue);

    //  const newArrayIncome = [];
    //  arrayStoreIncome.flat(Infinity).reduce((prevIncome, income) => {
    //    income > baseValue ? newArrayIncome.push(income) : prevIncome;
    //  });
    //  return newArrayIncome;
  };
  let res6 = getListIncomeOver_2000(resultTable, 2000);
  document.write(
    `<p>6) Загальний список доходів більше за 2000 грн.: ${res6}</p>`
  );

  //7) відсортувати кожен тиждень за зростанням
  const getListIncomeByIncrease = (arrayStoreIncome) => {
    let newArray = [];
    for (const store of arrayStoreIncome) {
      newArray.push(
        store.sort((income1, income2) => {
          return income1 - income2;
        })
      );
    }
    return newArray;
  };

  let res7 = getListIncomeByIncrease(resultTable);
  document.write(`<p>7) Кожен тиждень за зростанням прибутків: </p>`);
  for (const week of res7) {
    document.write(`${week}<br>`);
  }
  console.log(res7);

  //8) відсортувати тижні (рядки) за спаданням: максимального елементи у цьому тижні (рядку), тобто при порівнянні рядків потрібно порівнювати максимальні елементи у кожному з цих рядків
  const getListIncomeByDecrease = (arrayStoreIncome) => {
    let newArray = [];
    for (const store of arrayStoreIncome) {
      newArray.push(
        store.sort((income1, income2) => {
          return income2 - income1;
        })
      );
    }
    return newArray;
  };

  let res8 = getListIncomeByDecrease(resultTable);
  document.write(`<p>8) Кожен тиждень за спаданням прибутків:</p>`);
  for (const week of res8) {
    document.write(`${week}<br>`);
  }

  //9) упорядкувати тижні (рядки) за спаданням суми елементів у рядку (тобто при порівнянні двох рядків треба знайти суму кожного з рядків і порівнювати ці суми, на основі цих сум буде зрозуміло, який з елементів повинен іти раніше).

  const getIncomesStoresByIncrease = (arrayStoreIncome) => {
    arrayStoreIncome.sort((income1, income2) => {
      const totalIncome1 = income1.reduce((prevSum, sum) => prevSum + sum);
      const totalIncome2 = income2.reduce((prevSum, sum) => prevSum + sum);
      return totalIncome2 - totalIncome1;
    });
    return arrayStoreIncome;
  };
  let res9 = getIncomesStoresByIncrease(resultTable);
  document.write(
    `<p>9)відсортувати тижні (рядки) за спаданням: максимального елементи:</p>`
  );
  for (const week of res9) {
    document.write(`${week}<br>`);
  }
}
