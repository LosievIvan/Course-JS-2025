// Крок №0 Позначимо величини
// YEAR_BIRTH - рік народження - Number ціле число
// CURRENT_YEAR - поточний рік - Number ціле число
// AGE_YEARS - кількість років - Number ціле число

// Крок №1 Введення даних від користувача
const YEAR_BIRTH = parseInt(prompt('Введіть рік народження:', '1900'))
const CURRENT_YEAR = parseInt(prompt('Введіть поточний рік:', '2025'))

// Крок №2 Обчислення даних
const AGE_YEARS = CURRENT_YEAR - YEAR_BIRTH

//Крок №3 Виведення даних користувачу
document.write(`Вам ${AGE_YEARS} років`)
