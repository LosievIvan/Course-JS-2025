// Крок №0 Позначимо величини
// RANDOM_MONTH - випадковий номер місяця
// RANDOM_DAY - випадковий номер місяця
// totalRandom - сума випадкових номерів місяца та дня

// Крок №1 Обчислюємо дані
const RANDOM_MONTH = 1 + Math.floor(Math.random() * 12)
const RANDOM_DAY = 0 + Math.floor(Math.random() * 6)
let totalRandom = RANDOM_MONTH + RANDOM_DAY

// Крок №2 Виводимо результат 
document.write(`Випадковий номер місяця = ${RANDOM_MONTH}<br>`,
`Випадковий номер дня = ${RANDOM_DAY}<br>`,`Сума випадкових чисел = ${totalRandom}`)