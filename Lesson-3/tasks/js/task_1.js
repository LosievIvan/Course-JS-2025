// Крок №0 Позначимо величини
// Крок №1 Введення даних від користувача
// Крок №2 розрахунок суми, добутка та частки введених даних
//Крок №3 Виведення даних користувачу
let childNameFirst = prompt('Введіть імя першої дитини', 'Artyr')
let candiesChildFirst = parseInt(prompt('Скільки конфет у першій дитині?', '0'))
let childNameSecond = prompt('Введіть імя другої дитини', 'Ivan')
let candiesChildSecond = parseInt(prompt('Скільки конфет у другій дитині?', '0'))
if (candiesChildFirst >= candiesChildSecond)
	if (candiesChildFirst === candiesChildSecond)
		alert(`У дітлахів конфет порівну!`)
	else
		alert(` У ${childNameFirst} конфет більше!`)
else
alert(` У ${childNameSecond} конфет більше!`)

// document.write(`${}`,)