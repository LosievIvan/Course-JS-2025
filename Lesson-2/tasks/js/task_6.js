// Крок №0 Позначимо величини
// quantityProductNumber1 - кількість товару номер 1 - Number ціле число
// quantityProductNumber2 - кількість товару номер 2 - Number ціле число
// quantityProductNumber3 - кількість товару номер 3 - Number ціле число
// priceProductNumber1 - вартість товару номер 1 Number дійсне число
// priceProductNumber2 - вартість товару номер 2 - Number дійсне число
// priceProductNumber3- вартість товару номер 3 - Number дійсне число
// totalPriceProductNumber1 - загальна вартість товару 1 - Number дійсне число
// totalPriceProductNumber2 - загальна вартість товару 2 - Number дійсне число
// totalPriceProductNumber3 - загальна вартість товару 3 - Number дійсне число
// TOTAL_PRICE_PRODUCTS - загальная вартість усіх придбатих товарів - Number дійсне число
// TAX_ADDED_VALUE - Пдв 20% 
// TOTAL_TAX_ADDED_VALUE - сума Пдв 20% від вартості товару

// Крок №1 Введення даних від користувача
const quantityProductNumber1 = parseInt(prompt('Вкажіть кількість Першого товару в одиницях:', '1'))
const priceProductNumber1 = parseFloat(prompt('Вкажіть вартість Першого товару в гривнях:', '0.00'))
const quantityProductNumber2 = parseInt(prompt('Вкажіть кількість Другого товару в одиницях:', '1'))
const priceProductNumber2 = parseFloat(prompt('Вкажіть вартість Другого товару в гривнях:', '0.00'))
const quantityProductNumber3 = parseInt(prompt('Вкажіть кількість Третього товару в одиницях:', '1'))
const priceProductNumber3 = parseFloat(prompt('Вкажіть вартість Третього товару в гривнях:', '0.00'))

const TAX_ADDED_VALUE = 0.2

// Крок №2 Обчислюємо дані 
let totalPriceProductNumber1 = quantityProductNumber1 * priceProductNumber1
let totalPriceProductNumber2 = quantityProductNumber2 * priceProductNumber2
let totalPriceProductNumber3 = quantityProductNumber3 * priceProductNumber3
const TOTAL_PRICE_PRODUCTS = totalPriceProductNumber1 + totalPriceProductNumber2 + totalPriceProductNumber3
const TOTAL_TAX_ADDED_VALUE = TOTAL_PRICE_PRODUCTS * TAX_ADDED_VALUE
//Крок №3 Виведення даних користувачу
// console.log(timeHours, remainderCalculationHours, timeMinutes, timeSeconds);
document.write(`
	<table>
		<tr>
		<th class="title">Яблуневий супермаркет</th>
		</tr>
		<tr>
		<th class="subtitle">Чек № 001 </th>
		</tr>
		<tr>
			<td>${quantityProductNumber1}  x</td>
			<td>${priceProductNumber1.toFixed (2)}</td>
		</tr>
		<tr>
			<td>Товар Номер Один</td>
			<td>${totalPriceProductNumber1.toFixed (2)}</td>
		</tr>
		<tr>
			<td>${quantityProductNumber2}  x</td>
			<td>${priceProductNumber2.toFixed (2)}</td>
		</tr>
		<tr>
			<td>Товар Номер Два</td>
			<td>${totalPriceProductNumber2.toFixed (2)}</td>
		</tr>
		<tr>
			<td>${quantityProductNumber3}  x</td>
			<td>${priceProductNumber3.toFixed (2)}</td>
		</tr>
		<tr>
			<td>Товар Номер Три</td>
			<td>${totalPriceProductNumber3.toFixed (2)}</td>
		</tr>
		<tr>
		<th class="subtitle subtitle--top">Сума до сплати</th>
		<td class="subtitle subtitle--top">${TOTAL_PRICE_PRODUCTS.toFixed (2)}</td>
		</tr>
		<tr>
		<th class="subtitle subtitle--top">ПДВ 20% </th>
		<td class="subtitle subtitle--top">${TOTAL_TAX_ADDED_VALUE.toFixed (2)}</td>
		</tr>
	</table>`);