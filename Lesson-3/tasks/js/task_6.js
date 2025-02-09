// Крок №0 Позначимо величини
// Крок №1 Введення даних від користувача
// Крок №2 розрахунок суми, добутка та частки введених даних
//Крок №3 Виведення даних користувачу
let dayWeekNumber = parseInt(prompt('Введіть номер дня:', '1'))

let nameDay
switch (dayWeekNumber) {
	case 1:
		nameDay = 'Понеділок'
		break
	case 2:
		nameDay = 'Вівторок'
		break
	case 3:
		nameDay = 'Середа'
		break
	case 4:
		nameDay = 'Четвер'
		break
	case 5:
		nameDay = 'П`ятниця'
		break
	case 6:
		nameDay = 'Субота'
		break
	case 7:
		nameDay = 'Неділя'
		break
	default: nameDay ='Будь ласка, згадайте вірний день тижня!'
		break
}

document.write(nameDay)