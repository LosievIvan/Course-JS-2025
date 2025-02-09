// Крок №0 Позначимо величини
// Крок №1 Введення даних від користувача
// Крок №2 розрахунок суми, добутка та частки введених даних
//Крок №3 Виведення даних користувачу
const ageHuman = parseInt(prompt('Введіть вік людини:', '0'))
const BABY = 6
const SCHOOLBOY = 17
const WORKABLE = 59

let periodOfLife
if (ageHuman <= BABY) 
	periodOfLife = 'Дитина'
else if (ageHuman <= SCHOOLBOY)
periodOfLife = 'Школяр'
else	if (ageHuman <= WORKABLE)
periodOfLife = 'Студент або працівник'
else	
periodOfLife = 'Пенсіонер'
		
document.write(`Доброго дня. Ви - ${periodOfLife}`)