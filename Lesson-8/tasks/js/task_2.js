if (confirm("Почати тестування?")) {
  function getNumberOfRoomsPerA(carNumbers) {
    let totalCar_A = 0;
    for (let i = 0; i < carNumbers.length; i++) {
      if (carNumbers[i][0] === "А") totalCar_A++;
    }
    return totalCar_A;
  }
  function getFirstAndLastLettersAreSame(carNumbers) {
    let totalSame = 0;
    for (let i = 0; i < carNumbers.length; i++) {
      if (carNumbers[i][0] === carNumbers[i][carNumbers[i].length - 1])
        totalSame++;
    }
    return totalSame;
  }
  function getNumberOfRoomsFiveCharacters(carNumbers) {
    let sumFive = 0;
    for (let i = 0; i < carNumbers.length; i++) {
      if (carNumbers[i].length > 5) sumFive++;
    }
    return sumFive;
  }
  const carNumbers = [
    "АВ1234СЕ",
    "АА5678ВК",
    "АХ9999ВХ",
    "ВР2222СН",
    "ТТ5555ТТ",
    "ОР777ОР",
    "УК999КК",
    "ВН3456АО",
    "БМ4А",
    "КС6543НР",
    "ЛОКС",
    "АА1111АА",
    "ВК5678НМ",
    "ТТ8765РР",
  ];
  document.write(
    `починаються на букву «А»: ${getNumberOfRoomsPerA(
      carNumbers
    )} <br> перша і остання літери співпадають: ${getFirstAndLastLettersAreSame(
      carNumbers
    )}<br>складаються з більше ніш 5 символів: ${getNumberOfRoomsFiveCharacters(
      carNumbers
    )}`
  );
}
