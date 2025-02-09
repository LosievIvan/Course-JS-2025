// Крок №0 Позначимо величини
// Крок №1 Введення даних від користувача
// Крок №2 розрахунок суми, добутка та частки введених даних
//Крок №3 Виведення даних користувачу
const MIN_NUMBER = 1
const MAX_NUMBER = 5
let randomNumber = Math.floor(Math.random() * (MAX_NUMBER)) + MIN_NUMBER 
const indicateNumberOne = parseInt(prompt('Перша спроба - Вкажіть число від 1 до 5,', '0'))
if (indicateNumberOne === randomNumber) {
	alert(`Вітаємо! Ви вгадали число ${randomNumber}`)
}
else{
	const indicateNumberTwo = parseInt(prompt('Друга спроба - Вкажіть число від 1 до 5,', '0'))
	if (indicateNumberTwo === randomNumber)
		alert(`Вітаємо! Ви вгадали число ${randomNumber}`)
	else document.write(`Нажаль, Ви не вгадали число. Було випадкове число = ${randomNumber}`)
}