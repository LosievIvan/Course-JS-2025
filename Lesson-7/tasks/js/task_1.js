if (confirm("Почати тестування?")) {
  function getMonthName(numberMoth) {
    let Month;
    switch (numberMoth) {
      case 12:
        Month = "December";
        break;
      case 1:
        Month = "January";
        break;
      case 2:
        Month = "February";
        break;
      case 3:
        Month = "March";
        break;
      case 4:
        Month = "April";
        break;
      case 5:
        Month = "May";
        break;
      case 6:
        Month = "June";
        break;
      case 7:
        Month = "July";
        break;
      case 8:
        Month = "August";
        break;
      case 9:
        Month = "September";
        break;
      case 10:
        Month = "October";
        break;
      case 11:
        Month = "November";
        break;
    }
    return Month;
  }
  let monthNumberUser = parseInt(prompt("Введіть номер місяця:", "12"));
  document.write(getMonthName(monthNumberUser));
}
