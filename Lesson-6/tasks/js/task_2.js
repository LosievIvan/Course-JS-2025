if (confirm("Почати тестування?")) {
  let numberUser = parseInt(prompt("Введіть число для розгляду", "100"));
  for (let num = 0; num < numberUser; num++) {
    const firstNum = Math.floor(num / 10);
    const secondNum = num % 10;
    if (firstNum !== 0 && firstNum >= secondNum)
      document.write(`totalRezult: ${num}<br>`);
  }
}
