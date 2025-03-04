if (confirm("Почати тестування?")) {
  function getSeasons(monthNumber) {
    let result;
    switch (monthNumber) {
      case 12:
      case 1:
      case 2:
        result = "Зима";
        break;
      case 3:
      case 4:
      case 5:
        result = "Весна";
        break;
      case 6:
      case 7:
      case 8:
        result = "Літо";
        break;
      case 9:
      case 10:
      case 11:
        result = "Осінь";
        break;
    }
    return result;
  }
  let monthNumberUser = parseInt(prompt("Введіть номер місяця:", "2"));
  document.write(getSeasons(monthNumberUser));
}
