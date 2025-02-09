// Крок №0 Позначимо величини
// Крок №1 Введення даних від користувача
// Крок №2 розрахунок суми, добутка та частки введених даних
//Крок №3 Виведення даних користувачу
let priceProduct = parseFloat(prompt('Введіть ціну товару', '0'))
let muchMoney = parseFloat(prompt('Введіть кількість грошей', '0'))
const PRICE_LOTTERY = 4
let moneyForLottery = Math.floor(muchMoney - priceProduct)

if (priceProduct > muchMoney)
	alert(`У Вас недостатньо грошей!`)
else if (moneyForLottery >= PRICE_LOTTERY)
			alert(`Пропронуємо купити білет лотореї вартістю 4 грн`)
	  else alert(`Дякуємо за покупку!`)


