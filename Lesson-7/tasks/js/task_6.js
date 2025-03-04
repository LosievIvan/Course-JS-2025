if (confirm("Почати тестування?")) {
  function getTable(rows, columns) {
    let madeTable = `<tr>`;
    for (let row = 1; row <= rows; row++) {
      madeTable += `<tr>`;
      for (let column = 1; column <= columns; column++) {
        madeTable += `<td>${fixedMessage}</td>`;
      }
      madeTable += `</tr>`;
    }
    return madeTable;
  }
  let rowUser = parseInt(prompt(`Введіть кількість рядків`, `6`));
  let columnUser = parseInt(prompt(`Введіть кількість стовпців`, `5`));
  let fixedMessage = prompt(`Введіть повідомлення для таблиці`, `Чудово!`);
  document.write(
    `<table border="3px">${getTable(rowUser, columnUser)}</table>`
  );
}
