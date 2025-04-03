if (confirm("Почати тестування?")) {
  function getNewArrayNumbersStarting_A(arr) {
    const arrLeter_A = [];
    arr.forEach((element) => {
      if (element[0] === "А") arrLeter_A.push(element);
    });
    return arrLeter_A;
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
  document.write(`totalRezult: ${getNewArrayNumbersStarting_A(carNumbers)}`);
}
