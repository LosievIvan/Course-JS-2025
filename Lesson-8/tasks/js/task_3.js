if (confirm("Почати тестування?")) {
  function getBadGrade(arrGrades) {
    let sum = 0;
    for (let i = 0; i < arrGrades.length; i++) {
      if (arrGrades[i] <= 3) sum++;
    }
    return sum;
  }
  function getGoodGrade(arrGrades) {
    let sum = 0;
    for (let i = 0; i < arrGrades.length; i++) {
      if (arrGrades[i] >= 8) sum++;
    }
    return sum;
  }
  function getBelowAverageGrades(arrGrades) {
    let sumAverage = 0;
    for (let i = 0; i < arrGrades.length; i++) {
      sumAverage += arrGrades[i];
    }
    let average = sumAverage / arrGrades.length;
    let totalGrades = 0;
    for (let i = 0; i < arrGrades.length; i++) {
      if (arrGrades[i] < average) totalGrades++;
    }
    return totalGrades;
  }
  const arrGrades = [2, 4, 5, 8, 8, 12, 12, 10, 11, 9, 3, 6, 10, 5, 6, 3, 7];
  document.write(
    `кількість двійок: ${getBadGrade(
      arrGrades
    )}<br>хороших оцінок: ${getGoodGrade(
      arrGrades
    )}<br>які нижче середнього: ${getBelowAverageGrades(arrGrades)}`
  );
}
