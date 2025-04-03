if (confirm("Почати тестування?")) {
  function getArrFirstLettersOfNames(arr) {
    return arr.map((element) => element[0]);
  }
  const arrayNames = ["Ivan", "Oleg", "Olga", "Hikolaj", "Vika", "Andriy"];
  document.write(`totalRezult: ${getArrFirstLettersOfNames(arrayNames)}`);
}
