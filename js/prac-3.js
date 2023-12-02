//1 (map()) Потрібно отримати масив імен студентів та записати їх великими літерами.
// let studentRecords = [
// 	{ name: 'John', id: 123, marks: 98 },
// 	{ name: 'Baba', id: 101, marks: 23 },
// 	{ name: 'yaga', id: 200, marks: 45 },
// 	{ name: 'Wick', id: 115, marks: 75 },
// ]

// const upperName = studentRecords.map(student => student.name.toUpperCase())

// console.log(upperName)

// 2 (filter()) Припустимо, що ми маємо той самий набір даних, що й вище, але цього разу ми хочемо
// отримати детальну інформацію про студентів, які набрали більше 50 балів.
// let studentRecords = [
// 	{ name: 'John', id: 123, marks: 98 },
// 	{ name: 'Baba', id: 101, marks: 23 },
// 	{ name: 'yaga', id: 200, marks: 45 },
// 	{ name: 'Wick', id: 115, marks: 75 },
// ]
// const reitStudent = studentRecords.filter(function (student) {
// 	return student.marks > 50
// })

// console.log(reitStudent)

// 3  (reduce()) Необхідно одержати загальну суму балів студентів.
// let studentRecords = [
// 	{ name: 'John', id: 123, marks: 98 },
// 	{ name: 'Baba', id: 101, marks: 23 },
// 	{ name: 'yaga', id: 200, marks: 45 },
// 	{ name: 'Wick', id: 115, marks: 75 },
// ]
// const totalSum = studentRecords.reduce(function (acc, student) {
// 	return acc + student.marks
// }, 0)

// console.log(totalSum)

// 4 (map(), filter()) Необхідно отримати лише імена студентів, які набрали більше 50 балів із того ж набору
// даних.
// let studentRecords = [
// 	{ name: 'John', id: 123, marks: 98 },
// 	{ name: 'Baba', id: 101, marks: 23 },
// 	{ name: 'yaga', id: 200, marks: 45 },
// 	{ name: 'Wick', id: 115, marks: 75 },
// ]

// const exelentStudents = studentRecords.filter(({ marks }) => marks > 50).map(({ name }) => name)

// console.log(exelentStudents)

// 5 (filter(), reduce()) Необхідно отримати загальну суму балів студентів із id більше 120.
// let studentRecords = [
// 	{ name: 'John', id: 123, marks: 98 },
// 	{ name: 'Baba', id: 101, marks: 23 },
// 	{ name: 'yaga', id: 200, marks: 45 },
// 	{ name: 'Wick', id: 115, marks: 75 },
// ]

// const total = studentRecords
// 	.filter(({ id }) => id > 120)
// 	.reduce(function (acc, { marks }) {
// 		return (acc += marks)
// 	}, 0)
// console.log(total)

/*
  Сортування складних типів
  Виконати сортування масиву об'єктів, не змінюючи вихідний масив:
  - за зростанням та зменшенням значення якості price.
  - на ім'я в алфавітному та зворотному алфавітному порядку.
*/

// const items = [
// 	{ name: 'Samsung', price: 2000 },
// 	{ name: 'Asus', price: 2500 },
// 	{ name: 'LG', price: 1900 },
// 	{ name: 'Dell', price: 1200 },
// 	{ name: 'BenQ', price: 900 },
// ]

// const priceEncrise = [...items].sort((a, b) => a.price - b.price)
// console.log(priceEncrise)

// const priceReduce = items.toSorted((a, b) => b.price - a.price)
// console.dir(priceReduce)

// const nameOn = items.toSorted((a, b) => a.name.localeCompare(b.name))
// console.dir(nameOn)

// Array.prototype.myMap = function (callback) {
// 	const items = []

// 	for (let index = 0; index < this.length; index++) {
// 		const element = this[index]
// 		const result = callback(element, index, this)
// 		items.push(result)
// 	}

// 	return items
// }

// const number = [1, 2, 3, 4, 5]

// const newNumber = number.myMap(num => num + 2)
// console.log(newNumber)

// function User({ name, age }) {
// 	this.name = name
// 	this.age = age
// 	// this.getName = function () {
// 	// 	return this.name
// 	// }
// }

// User.prototype.getName = function () {
// 	return this.name
// }

// const user = new User({ name: 'Poly', age: 25 })
// const user1 = new User({ name: 'Ajax', age: 38 })

// console.log(user.getName())
// console.log(user1.getName())

// console.log(user)
// console.log(user1)

// Напиши функцію конструктор User для створення користувача з такими властивостями
//a. userName - ім'я, рядок
//b. age - вік, число
//c. numbersOfPost - кількість постів, число
//d. функція очікує 1 параметр - об'єкт налаштувань з однойменними властивостями

//Додай метод getInfo(), який повертає рядок:
//`Користувачеві ${} ${} років і в нього ${} публікацій.`

// const User = function (userObj) {
// 	this.userName = userObj.userName
// 	this.age = userObj.age
// 	this.numbersOfPost = userObj.numbersOfPost
// }

// User.prototype.getInfo = function () {
// 	return `Користувачеві ${this.userName} ${this.age} років і в нього ${this.numbersOfPost} публікацій.`
// }

// const user = new User({ userName: 'Masha', age: 33, numbersOfPost: 125 })

// console.log(user.getInfo())

function stringChange(input) {
	let result = ''
	let letter = ['а', 'е', 'є', 'и', 'і', 'ї', 'о', 'у', 'ю', 'я']

	for (let i = 0; i < input.length; i++) {
		if (letter.includes(input[i].toLowerCase())) {
			result = result + input[i].toUpperCase()
		} else {
			result = result + input[i].toLowerCase()
		}
	}
	return result
}

console.log(stringChange('Привіт друзі'))
console.log(stringChange('А ми тут граємо'))
