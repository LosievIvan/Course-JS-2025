// Крок №0 Позначимо величини
// numberSeconds - кількість секунд від початку доби - Number ціле число
// STANDART_MINUTES- кількість cекунд в хвилині та хвилин у часі Number ціле число
// STANDART_HOURS - кількість хвилин у часі Number ціле число
// remainderCalculationHours - залишок секунд для розрахунку часу у хвилинах
// timeHours - який час у годинах
// timeMinutes - який час у хвилинах
// timeSeconds - який час у секундах

// Крок №1 Введення даних від користувача
let numberSeconds = parseInt(prompt('Вкажіть скільки секунд минуло від початку доби:', '4600'))
const STANDART_MINUTES = 60
const STANDART_HOURS = 3600

// Крок №2 Обчислюємо дані 
let timeHours = Math.floor(numberSeconds / STANDART_HOURS)
let remainderCalculationHours = numberSeconds % STANDART_HOURS
let timeMinutes = Math.floor(remainderCalculationHours / STANDART_MINUTES)
let timeSeconds = remainderCalculationHours % STANDART_MINUTES

//Крок №3 Виведення даних користувачу
// console.log(timeHours, remainderCalculationHours, timeMinutes, timeSeconds);
document.write(`Зараз на годиннику: ${timeHours} година ${timeMinutes} хвилин ${timeSeconds} секунд`);