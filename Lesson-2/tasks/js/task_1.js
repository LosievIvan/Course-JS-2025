// Крок №0 Позначимо величини
// firstValidNumber - перше дійсне число - Number
// secondValidNumber - перше дійсне число - Number
// sumRealNumbers- сума дійсних чисел- Number
// productRealNumbers- добуток Дійсних чисел- Number
// fractionRealNumbers- частка Дійсних чисел- Number 

// Крок №1 Введення даних від користувача
let firstValidNumber = parseFloat(prompt('Введіть перше дійсне число:', '1'))
let secondValidNumber = parseFloat(prompt('Введіть друге дійсне число:', '1'))

// Крок №2 розрахунок суми, добутка та частки введених даних 
const sumRealNumbers = firstValidNumber + secondValidNumber
const productRealNumbers = firstValidNumber * secondValidNumber
const fractionRealNumbers = firstValidNumber / secondValidNumber

//Крок №3 Виведення даних користувачу
document.write(`<table>
<tr>
	<th>Значення</th>
	<th>Результат</th>
</tr>
<tr>
	<td>Сума</td>
	<td>${sumRealNumbers}</td>
</tr>
<tr>
	<td>Добуток</td>
	<td>${productRealNumbers}</td>
</tr>
<tr>
	<td>Частка</td>
	<td>${fractionRealNumbers}</td>
</tr>
</table>
`)