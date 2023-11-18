/*
 * Створіть масив genres з елементами Jazz і Blues. ✅
 * Додайте "Рок-н-рол" в кінець. ✅
 * Виведіть у консоль перший елемент масиву. ✅
 * Виведіть у консоль останній елемент масиву. Код має працювати для масиву довільної довжини. ✅
 * Видаліть перший елемент і виведіть його в консоль.  ✅
 * Вставте «Country» та «Raggy» на початок масиву.  ✅
 */

// const genres = ['Jazz', 'Blues']
// const genres = new Array('Jazz', 'Blues')
// genres.push('Рок-н-рол')

// console.log(genres)
// console.log(genres[0])
// console.log(genres[genres.length - 1])
// console.log(genres.at(-1))

// const firstElem = genres.shift()
// console.log(firstElem)
// console.log(genres)

// const length = genres.unshift('Country', 'Raggy')
// console.log(genres)
// console.log(length) //Нова довжина массиву

// Дано масив чисел. Виведіть на екран всі парні елементи масиву.
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// for (let number of numbers) {
// 	if (number % 2 === 0) {
// 		console.log(number)
// 	}
// }

// numbers.length = 0
// numbers.splice(0, numbers.length)
// while (numbers.length) {
// 	numbers.pop()
// }
// console.log(numbers)

/*
 * Напишіть функцію copyArr(arr), яка копіює масив, не змінюючи оригінал.
 */

// const clients = ['Mango', 'Ajax', 'Poly', 'Kiwi']
// function copyArr(arr) {
// 	// return arr.slice()
// 	return [...arr]
// }

// console.log(copyArr(clients) === clients)

// function copyArr(arr) {
// 	let newCopy = []
// 	for (const arrs of arr) {
// 		newCopy.push(arrs)
// 	}
// 	return newCopy
// }
// console.log(copyArr(clients))

//Напишіть функцію removeDuplicates(arr), яка повертає масив, у якому видалені повторювані елементи з масиву arr.

// let arr = ['php', 'php', 'css', 'css', 'script', 'script', 'html', 'html', 'java']
// function removeDuplicates(arr) {
// 	let uniqueArr = []

// 	for (const item of arr) {
// 		if (!uniqueArr.includes(item)) {
// 			uniqueArr.push(item)
// 		}
// 	}

// 	return uniqueArr
// }

// function removeDuplicates(arr) {
// 	return [...new Set(arr)]
// }

// const result = removeDuplicates(arr)
// console.log(result) // [php,css,script,html,java]

// Напишіть функцію union, яка повертає масив, що складається тільки з унікальних елементів масиву.
// const array1 = [5, 2, 1, -10, 8, 5, 2, 1, -9, 3, 7]

// function union(arr) {
// 	let newArray = []
// 	for (const item of arr) {
// 		if (arr.lastIndexOf(item) === arr.indexOf(item)) {
// 			newArray.push(item)
// 		}
// 	}
// 	return newArray
// }

// console.log(union(array1))

// * Напиши скрипт, який, для об'єкта user, послідовно:

// * додає поле mood зі значенням 'happy'
// * замінює значення hobby на 'skydiving'
// * замінює значення premium на false
// * виводить вміст об'єкта user у форматі ключ: значення використовуючи Object.keys() і for...of

// const user = {
// 	name: 'John',
// 	age: 21,
// 	hobby: 'css',
// 	premium: true,
// }

// user.mood = 'happy'
// user['hobby'] = 'skydiving'
// user.premium = false

// const keys = Object.keys(user)

// for (const item of keys) {
// 	console.log(`${item}: ${user[item]}`)
// }

// console.log(user)

// Напишіть деструктуруюче присвоєння, яке:

// значення властивості name додати змінній name.
// значення властивості years додати змінній age.
// властивість isAdmin присвоює змінну isAdmin (false, якщо немає такої властивості)

// let user = {
// 	name: 'John',
// 	years: 30,
// 	isAdmin: true,
// }

// // const name = user.name
// const { name, years: age, isAdmin = false } = user
// console.log(name)
// console.log(age)
// console.log(isAdmin)
// console.log(user)

//Напишіть функцію, яка перевіряє, чи є елемент саме простим об'єктом, а не масивом, null тощо.

// function isPlainObject(value) {
// 	return typeof value === 'object' && value !== null && !Array.isArray(value)
// }

// console.log(isPlainObject({ a: 1 })) // true
// console.log(isPlainObject([])) // false
// console.log(isPlainObject(null)) // false
// console.log(isPlainObject(1)) // false
// console.log(isPlainObject(undefined)) // false
