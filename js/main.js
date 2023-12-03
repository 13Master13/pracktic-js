let mas = console.log('Hello') //Простой вывод в консоль
let mas_1 = alert('Hello 1') //Простое модальное окно
let mas_2 = confirm('Hello 2?') //Модальное окно "Да/Нет". Возвращает "true/false"
let mas_3 = prompt('Hello 3') //Модальное окно с введением текста. Возвращает "string/null"


expression1 && expression2 // Логічне "і" (true або false) - Оператор зліва направо перевіряє почергово обидва операнди на істинність та повертає або значення останнього істинного (тільки правого) операнда, або першого хибного (лівого чи правого), на якому він запнувся.

expression1 || expression2 // Логічне "або" (true або false) - Якщо хоча б один із операндів можна перетворити на true, результатом буде цей операнд.

!expression // Логічне "ні" (true або false) - приводить операнд до логічного значення і потім заперечує (інвертує) його, тобто заміняє на протилежне: true —> false, а false —> true.

const guestName = "Mango";
const roomNumber = 207;
const greeting = `Welcome ${guestName}, your room number is ${roomNumber}!`//Шаблонний рядок

typeof operand // Визначення типу даних

message.length // Довжина рядка message

String()// Повертає строку
Number()// Повертає число

parseInt(num)// Повертає ціле число
parseFloat(num)// Повертає число з плаваючою крапкою
(num)toFixed(fx)// Округлення до первної кількості знаків

str.slice(startIndex, endIndex)// Створення копії рядка str від startIndex до endIndex
message.toLowerCase()// Нижній регістр
message.toUpperCase()// Верхній регістр
str.includes(sub)// Шукаємо sub у str. Повертає true або false
str.startsWith(substr)// Чи починається str з substr. Повертає true або false
str.endsWith(substr)// Чи закінчується str вказаним substr. Повертає true або false
str.indexOf(substr)// Повертає індекс першого substr у str. Повертає -1 якщо не знайдено
str.trim()// Видаляє початкові та кінцеві пробіли у str

Math.floor()// Округлення у меншу сторону
Math.ceil()// Округлення у більшу сторону
Math.round()// Округлення математичне
Math.max()// Повертає найбільше число
Math.min()// Повертає найменше число
Math.random()// Повертає рандомне число від 0 до 1

if (condition) {
	// код, який виконується, якщо умова істинна
}

if (condition) {
	// код, який виконується, якщо умова істинна
} else {
	// код, який виконується, якщо умова хибна
}

if (condition_1) {
	// код, який виконується, якщо умова (condition_1) істинна
} else if (condition_2) {
	// код, який виконується, якщо умова (condition_2) істинна
} else if (condition_3) {
	// код, який виконується, якщо умова (condition_3) істинна
} else {
	// код, який виконується, якщо всі умови хибні
}

switch (expression) {
	case value1:
		// код, що виконується, якщо вираз (expression) дорівнює value1
    break;
		case value2:
			// код, що виконується, якщо вираз (expression) дорівнює value2
			break;
			// ...
			default:
				// код, що виконується, якщо вираз (expression) не відповідає жодному значенню
}
			
Умова ? Якщо умова true : Якщо умова false // Тернарний оператор

words.join("r")// Перетворює масив words у рядок з розділювачем r
message.split("b")// Перетворює рядок message у масив за вказаним роздільником b
planets.slice(start, end)// Створення копії масива planets від start до end
firstArray.concat(secondArray, thirdArray)// Об'єднує масив firstArray з масивом secondArray та масивом thirdArray
array.indexOf(elem)// Повертає індекс елемента elem у масиві array(-1 якщо не знайдено)
array.push(element1, element2)// Додає element1 та element2 до масиву array
array.includes(element)// Шукає element у масиві array. Повертає true або false
const newArr = Array.from(arr)// Створення нового масиву newArr з псевдомасиву arr

for (let i = 0; i < array.length; i++) {}// FOR Ітерація по масиву array з використанням циклу for
for (const element of elements) { }// FOR OF Ітерація по масиву elements із збереженням кожного елемента у elements

for (const key in object) {}// FOR IN Перебір ключів key об'єкта object

function name(params) { }// function declaration
const newFun = function name(params) { }// function expression

const book = {
	key: value,
}
const keys = Object.keys(book)// Приймає об'єкт book та повертає масив keys ключів
const values = Object.values(book)// Приймає об'єкт book та повертаю масив values значень