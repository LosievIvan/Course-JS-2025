// Крок №0 Позначимо величини
// Крок №1 Введення даних від користувача
// Крок №2 розрахунок суми, добутка та частки введених даних
//Крок №3 Виведення даних користувачу
let menuSmile = parseInt(prompt(' 1. Веселий\n 2. Сумний\n 3. Обурений', '1'))

let userSmile
switch (menuSmile) {
	case 1:
		userSmile = '&#128513;'
		break;
	case 2:
		userSmile = '&#128528;'
		break;
	case 3:
		userSmile = '&#128545;'
		break;
}

document.write(userSmile)