if (confirm("Почати тестування?")) {
  let depozit = parseFloat(prompt("Вкажіть суму депозиту:", "1000"));
  let interestRate_1 = 0.2;
  let interestRate_2 = 0.27;
  let depositTerm_1 = 20;
  let depositTerm_2 = 17;

  for (let years = 0; years < depositTerm_1; years++) {
    depozit += depozit * interestRate_1;
  }
  for (let years = 0; years < depositTerm_2; years++) {
    depozit += depozit * interestRate_2;
  }

  document.write(`Загальна сума через 37 років: ${depozit.toFixed(2)} grn`);
}
