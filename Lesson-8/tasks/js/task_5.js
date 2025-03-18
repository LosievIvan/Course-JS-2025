if (confirm("Почати тестування?")) {
  const getrandomArrWins = (numberOfPrizes) => {
    let randomArr = [];
    for (let i = 0; i < numberOfPrizes; i++) {
      let randomNumber = Math.floor(Math.random() * (500 - -500 + 1)) + -500;
      randomArr.push(randomNumber);
    }
    return randomArr;
  };

  const getSelectedItemNumber = (randomArr) => {
    let sum = 0;
    let userAnswer = 1;
    while (userAnswer === true) {
      let userNumber = parseInt(
        prompt(
          `Спробуйте Виграти - Вкажіть номер елемента до ${numberOfPrizes}`
        )
      );
      sum += randomArr[userNumber];
      userAnswer = confirm("Хочете Спробуйти виграти ще гроші?");
    }
    alert("Дякую за ігру!");
    return sum;
  };
  let numberOfPrizes = parseInt(prompt(`Введіть кількість призових сум`, `12`));
  document.write(
    `Ваш виграш склав = ${getSelectedItemNumber(getrandomArrWins())}`
  );
}
