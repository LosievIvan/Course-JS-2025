if (confirm("Почати тестування?")) {
  function getNumberOfVisitMin_20(arrNumbers) {
    let sum = [];
    for (let day = 0; day < arrNumbers.length; day++) {
      if (arrNumbers[day] < 20) sum.push(day + 1);
    }
    return sum;
  }

  function getNumberOfVisitMinimum(arrNumbers) {
    let result = [];
    let minimum = Math.min(...arrNumbers);
    for (let i = 0; i < arrNumbers.length; i++) {
      if (arrNumbers[i] == minimum) result.push(i + 1);
    }
    return result;
  }
  function getNumberOfVisitMax(arrNumbers) {
    let result = [];
    let maximum = Math.max(...arrNumbers);
    for (let i = 0; i < arrNumbers.length; i++) {
      if (arrNumbers[i] === maximum) result.push(i + 1);
    }
    return result;
  }
  function getNumberOfVisitWorking(arrNumbers) {
    let workingDays = 0;
    for (let i = 0; i < arrNumbers.length; i++) {
      if (i < 5) workingDays += arrNumbers[i];
    }
    return workingDays;
  }
  function getNumberOfVisitWeekends(arrNumbers) {
    let weekends = 0;
    for (let i = 0; i < arrNumbers.length; i++) {
      if (i >= 5) weekends += arrNumbers[i];
    }
    return weekends;
  }

  const arrVisitors = [19, 85, 18, 66, 150, 124, 94];
  document.write(
    `Дні коли відвідувачів меньше за 20: ${getNumberOfVisitMin_20(
      arrVisitors
    )}<br>
День з найменшим кіл. відвідувачів: ${getNumberOfVisitMinimum(arrVisitors)}<br>
День з найбільшим кіл. відвідувачів: ${getNumberOfVisitMax(arrVisitors)}<br>
Загальна кіл. кліентів у робочі дні: ${getNumberOfVisitWorking(arrVisitors)}<br>
Загальна кіл. кліентів у робочі дні: ${getNumberOfVisitWeekends(arrVisitors)}`
  );
}
