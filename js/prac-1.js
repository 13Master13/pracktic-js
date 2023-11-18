/* Створіть змінну str і дайте їй значення 'abcde'. Звертаючись до окремих символів цього рядка,виведіть на екран символ 'a', символ 'b', символ 'e'.
 */
// const srt = 'abcde'
// console.log(srt[0])
// console.log(srt[1])
// console.log(srt[srt.length - 1])

/* // Виведи на екран загальну кількість яблук та винограду.Різницю яблук та винограду. */
// const apples = 47
// const grapes = 135
// const totalFruts = apples + grapes
// console.log(totalFruts)

/* Напиши скрипт, який виводить в консоль заокруглені вгору / вниз і т.д. значення змінної value. Використовуй методи Math.floor(), Math.ceil() і Math.round(). Перевір що буде в консолі при значеннях 27.3 та 27.9. */
// const value = 27.5
// console.log(Math.floor(value))
// console.log(Math.round(value))
// console.log(Math.ceil(value))

/* Переробіть наведений код так, щоб у ньому використовувалися операції +=, -=, *=, /=, ++, --.Кількість рядків коду не повинна змінитися. Код для переробки: */
// let num = 1
// num += 12
// num -= 14
// num *= 5
// num /= 7
// num ++ 1
// num -- 1

/* Шаблонные строки. Написать фразу с помощью конкатенации и шаблонных строк "Hello, my name is [name], I'm [age] years old and I like [hobby]", где в квадратных скобках - переменные вставленные в строку */
// const name = 'Dan'
// const age = 35
// const hobby = 'swimming'

// const massage = `Hello, my name is ${name}, I'm ${age} years old and I like ${hobby}`

// console.log(massage)

/* Напишіть інструкцию, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
 */
// const str = 'string not starting with capital'
// const strUpper = str[0].toUpperCase() + str.slice(1)
// console.log(strUpper)

/* Напиши скрипт, який виводить у консоль рядок "Це позитивне число", якщо в prompt користувач ввів число більше за нуль. Якщо було введено нуль, виводь у консоль рядок "Це нуль". Якщо передали від'ємне число, у консолі має бути рядок "Це від'ємне число". */
// const userInput = Number(prompt('Введіть число', 0))
// if (userInput > 0) {
// 	console.log('Це позитивне число')
// } else if (userInput === 0) {
// 	console.log('Це нуль')
// } else {
// 	console.log('Це від`ємне число')
// }

/* Напиши скрипт, який порівнює числа змінних a і b. Якщо обидва значення більше 100, виведи в консоль максимальне з них. Інакше у консолі має бути сума значення b та числа 512. */
// const a = 90
// const b = 250

// let result = 0
// if (a > 100 && b > 100) {
// 	console.log(Math.max(a, b))
// } else {
// 	console.log(b + 512)
// }

/* Ви просите користувача ввести суму його зарплати. Потім розраховуєте: Добавку у вигляді премії у сумі 15% від зарплати. Податки у сумі 10% від суми всіх нарахувань (зарплата + премія). Витрату в магазині в сумі 190. Розділяєте суму, що залишилася, між користувачем і його "дружиною"/"чоловіком". Виводьте скільки залишилося в результаті всіх операцій грошей у користувача. */
// let totalMoney = Number(prompt('Введіть Вашу ЗП'))
// console.log(totalMoney)
// totalMoney *= 1.15
// alert('Ваша ЗП + Премія ' + totalMoney)
// totalMoney *= 0.9
// alert('Ваша ЗП після сплати податків залишилось ' + totalMoney)
// totalMoney -= 190
// alert('Після магазину залишилось ' + totalMoney)
// totalMoney /= 2
// alert('У Вас залишилось ' + totalMoney)

/* Підрахуйте суму чисел у діапазоні від 1 до 10 за допомогою циклу for, while та do...while. Підказка: у результаті має вийти 55. */

// let sumFor = 0
// for (i = 0; i <= 10; i += 1) {
// 	sumFor += i
// }
// console.log(sumFor)

// let sumWhile = 0
// let i = 0
// while (i <= 10) {
// 	sumWhile += i
// 	i += 1
// }
// console.log(sumWhile)

// let sumDoWhile = 0
// let i = 1
// do {
// 	sumDoWhile += i
// 	i += 1
// } while (i <= 10)
// console.log(sumDoWhile)
