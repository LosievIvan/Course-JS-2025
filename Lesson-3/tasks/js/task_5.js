// Крок №0 Позначимо величини
// Крок №1 Введення даних від користувача
// Крок №2 розрахунок суми, добутка та частки введених даних
//Крок №3 Виведення даних користувачу
let carControlCategory = prompt('Введіть категорію водія:', 'A')

let vehicle
switch (carControlCategory) {
	case 'A':
		vehicle = 'Мотоцикл'
		break
	case 'B':
		vehicle = 'Легковий автомобіль'
		break
	case 'C':
		vehicle = 'Вантажний автомобіль'
		break
	default: vehicle ='Звернітся до Сервісного центру МВС'
		break
}
document.write(`Ви має право керувати: ${vehicle}`)