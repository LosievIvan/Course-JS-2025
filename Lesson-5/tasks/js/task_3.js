if (confirm('Почати тестування?')) {
	let hiddenNumber = 0
	do {
		hiddenNumber = Math.floor(Math.random() * (10)) + 1
	} while (!confirm(`Ви загадали число = ${hiddenNumber}`))
	document.write(`Вітаємо! Ви вгадали число: ${hiddenNumber}`)
}