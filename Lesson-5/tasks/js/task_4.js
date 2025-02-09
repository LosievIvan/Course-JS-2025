
if (confirm('Почати тестування?')) {
	let numberOne = parseInt(prompt(`Введіть початок проміжку`, `0`))
	let numberTwo = parseInt(prompt(`Введіть кінець проміжку`, `0`))
	let totalSum = 0
	for ( let num = numberOne; num <= numberTwo; num++) {
		if (num % 2 === 0) continue 
			totalSum+= num
			document.write(`усі непарні числа у проміжку: ${num}<br>`)
	}
	document.write(`сума усіх непарних чисел: ${totalSum}`)
}
