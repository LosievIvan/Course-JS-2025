// Крок №0 Позначимо величини
// Крок №1 Введення даних від користувача
// Крок №2 розрахунок суми, добутка та частки введених даних
//Крок №3 Виведення даних користувачу

let randomNumberOne = Math.floor(Math.random() * (100)) + 1
let randomNumberTwo = Math.floor(Math.random() * (100)) + 1

let randomNumberStart = Math.min(randomNumberOne, randomNumberTwo)
let randomNumberEnd = Math.max(randomNumberOne, randomNumberTwo)

randomNumberStart += -10
randomNumberEnd += +10

let userEntersNumber = parseInt(prompt('Введіть любе число від 1 до 100\nта спробуйте виграти', '1'))

if (userEntersNumber >= randomNumberStart && userEntersNumber <= randomNumberEnd)
	alert('Вітаємо! Ви виграли')
else alert('Спробуйте ще раз. Ви не вгадали число!')

document.write(`Перевірка! Рандомні числа: ${randomNumberStart} та ${randomNumberEnd}`)
