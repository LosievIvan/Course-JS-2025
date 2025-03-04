if (confirm("Почати тестування?")) {
  function getConvertCentimetersInches(centimeter) {
    const centimOfInches = 0.393701;
    return centimeter * centimOfInches;
  }
  function getConvertKilogramsPounds(kilogram) {
    const KilogramOfPound = 2.20462;
    return kilogram * KilogramOfPound;
  }
  function getConvertKilometersMiles(kilometer) {
    const KilometerOfMile = 0.621371;
    return kilometer * KilometerOfMile;
  }
  let centimeter = parseFloat(prompt(`Введіть довжину в сантиметрах:`, `178`));
  let kilogram = parseFloat(prompt(`Введіть вагу в кілограмах:`, `85`));
  let kilometer = parseFloat(prompt(`Введіть довжину в кілометрах:`, `100`));
  document.write(
    `Довжина ${centimeter} cм це ${getConvertCentimetersInches(
      centimeter
    ).toFixed(3)}дюймів<br> Вага ${kilogram} кг це ${getConvertKilogramsPounds(
      kilogram
    ).toFixed(
      3
    )} фунтів<br> Довжина ${kilometer} км це ${getConvertKilometersMiles(
      kilometer
    ).toFixed(3)} миль`
  );
}
