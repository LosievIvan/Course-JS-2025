if (confirm("Почати тестування?")) {
  function getWorkingDay(numberDay) {
    return numberDay <= 5 ? "Робочій день" : "Вихідний день";
  }
  let dayNumberUser = parseInt(prompt("Введіть номер дня:", "3"));
  document.write(getWorkingDay(dayNumberUser));
}
