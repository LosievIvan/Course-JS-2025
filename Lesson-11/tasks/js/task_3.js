if (confirm("Почати тестування?")) {
  let arrayBattlefield = [
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
  ];
  //	----варіант 2
  //   const getarrayBattlefield = (numberCells = 6) => {
  //     let arrBattle = [];
  //     for (let cells = 0; cells < numberCells; cells++) {
  //       arrBattle.push(new Array(numberCells.fill(1)));
  //     }
  //     return arrBattle;
  //   };

  let numberOfShips = parseInt(prompt("Введіть кількість кораблів", "5"));
  // рандомне розміщення кораблів
  const getRandomShipDeployment = (
    array,
    numberOfShips = 5,
    min = 0,
    max = 5
  ) => {
    let countShip = 1;
    do {
      let randomIndex_X = Math.floor(Math.random() * (max - min + 1)) + min;
      let randomIndex_Y = Math.floor(Math.random() * (max - min + 1)) + min;
      array.forEach((el, ind, baseArray) => {
        if (ind === randomIndex_X && el[ind] === 0) {
          baseArray[randomIndex_X][randomIndex_Y] = 1;
          countShip++;
        }
        //array.fill(1, randomIndex_Y, randomIndex_Y + 1);
      });
    } while (countShip <= numberOfShips);
    return array;
  };
  console.log(getRandomShipDeployment(arrayBattlefield));

  // гра кориcтувача
  let numberOfShots = parseInt(
    prompt("Введіть кількість патронів до 20шт", "10")
  );
  const getPlayerShotCoordinates = (array, numberOfShips, numberOfShots) => {
    for (let shots = 1; shots <= numberOfShots; ) {
      let userCoordinate_X =
        parseInt(
          prompt("Введіть координату пострілу по осі Х макс 6 комірок", "1")
        ) - 1;
      let userCoordinate_Y =
        parseInt(
          prompt("Введіть координату пострілу по осі Y макс 6 комірок", "1")
        ) - 1;
      if (array[userCoordinate_X][userCoordinate_Y] === 1) {
        --numberOfShips;
        --numberOfShots;
        alert(
          `Вітаємо! Ви влучили у корабель!Ще залишилось ${numberOfShips} кораблів`
        );
      } else {
        alert(
          `Нажаль! Ви Не влучили у корабель!Ще залишилось ${
            numberOfShots - shots
          } патронів`
        );
        shots++;
      }
      if (numberOfShips === 0) {
        break;
      }
    }
    return alert("Дякуємо за ігру! Ваша гра закінчилась!");
  };
  let res2 = getPlayerShotCoordinates(
    arrayBattlefield,
    numberOfShips,
    numberOfShots
  );

  // ігрове поле на єкран
}
