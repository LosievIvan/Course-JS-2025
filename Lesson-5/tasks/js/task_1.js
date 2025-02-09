if (confirm('Почати тестування?')) {
	
	let userRandomNumbers = parseInt(prompt('Введіть кількість випадкових чисел:', '1'))

	for (let Num = 1; Num <= userRandomNumbers; Num++) {
		let randomNumber = Math.floor(Math.random() * (100)) + 1
		document.write(`<ul type="circle">`,`<li>${randomNumber}</li>`,`</ul>`)
	}
}

// document.write(`<ul>`)
// document.write(`<li>${randomNumber}</li>`)
// document.write(`</ul>`)