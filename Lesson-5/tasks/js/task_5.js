if (confirm('Почати тестування?')) {
	let numberWeeks = parseFloat(prompt('Введіть кількість тижнів:', '1'))
	
	let totalSum = 0
	for (let weeks = 1; weeks <= numberWeeks; weeks++) {
	let totalWeeks = 0
	for (let day = 1; day <= 7;) {
		let numberWeeks = parseFloat(prompt(`Сума прибутку за день №${day++} тижня №${weeks}`, `1000`))
		totalWeeks += numberWeeks
	}
	document.write(`<p>Сума прибутку за тиждень №${weeks} = ${totalWeeks}</p>`)
	totalSum+=totalWeeks
}
