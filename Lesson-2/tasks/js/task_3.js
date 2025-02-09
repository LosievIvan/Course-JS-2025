// Крок №0 Позначимо величини
// costUnitProduct - вартість одиниці товару- Number дісне число
// quantityProduct -кількість товару в шт - Number ціле число
//totalCostProduct - загальна вартість товару - Number дісне число
// VALUE_ADDED_TAX - пдв 5% - Number дісне число
// taxTotalCostProduct - пдв 5% від загальної вартості товару - Number дісне число

// Крок №1 Введення даних від користувача
let costUnitProduct = parseFloat(prompt('Введіть вартість одиниці товару:', '0'))
let quantityProduct = parseInt(prompt('Введіть кількість товару:', '1'))
const VALUE_ADDED_TAX = 5

// Крок №2 Обчислюємо загальну вартість та 5% пдв
let totalCostProduct = quantityProduct * costUnitProduct
let taxTotalCostProduct = totalCostProduct / 100 * VALUE_ADDED_TAX

//Крок №3 Виведення даних користувачу
document.write(`Загальна вартість товару = ${totalCostProduct.toFixed (2)} грн<br>`,
`пдв 5% від загальної вартості товару = ${taxTotalCostProduct.toFixed (2)} грн`)