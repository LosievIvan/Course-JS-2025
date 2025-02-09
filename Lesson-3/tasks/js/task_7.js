// Крок №0 Позначимо величини
// Крок №1 Введення даних від користувача
// Крок №2 розрахунок суми, добутка та частки введених даних
//Крок №3 Виведення даних користувачу
let dayWeekNumber = parseInt(prompt('Введіть номер місяця:', '1'))

let seasons
switch (dayWeekNumber) {
	case 1:
	case 2:
	case 12:
		seasons = 'Зима'
		break
	case 3:
	case 4:
	case 5:
		seasons = 'Весна'
		break
	case 6:
	case 7:
	case 8:
		seasons = 'Літо'
		break
	case 9:
	case 10:
	case 11:
		seasons = 'Осінь'
		break
	default: seasons ='Такого номеру місяця нема!'
		break
}

document.write(seasons)