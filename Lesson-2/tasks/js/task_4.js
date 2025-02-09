// Крок №0 Позначимо величини
// lengthCentimeters - довжина у сантиметрах- Number ціле число
// STANDARD_METER - кількість сантиметрів у метрі
// STANDARD_KILOMETERS - кількість метрів у кілометрі
// lengthMeters - довжина в метрах- Number дійсне число
// lengthKilosMeters - довжина в кілометрах - Number дісне число

// Крок №1 Введення даних від користувача
let lengthCentimeters = parseInt(prompt('Введіть довжину у сантиметрах:', '1'))
const STANDARD_METER = 100
const STANDARD_KILOMETERS = 1000

// Крок №2 Обчислюємо довжину в метрах та кілометрах
let lengthMeters = lengthCentimeters / STANDARD_METER
let lengthKilosMeters = lengthMeters / STANDARD_KILOMETERS

//Крок №3 Виведення даних користувачу
document.write(`Довжина у метрах = ${lengthMeters} м.<br>`,
`Довжина у кілометрах = ${lengthKilosMeters} км.`)