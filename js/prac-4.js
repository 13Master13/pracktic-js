// Написати скрипт: при натисканні на кнопку додавати в div з ідентифікатором "container" фрагмент розмітки
//<div class="item">
//<h3>Заголовок</h3>
//<p>текст текст текст</p>
//</div>

// const btnEl = document.querySelector('.add-btn')
// const blockEle = document.querySelector('.container')

// Перший спосіб
// btnEl.addEventListener('click', elem => {
// 	const div = document.createElement('div')
// 	div.classList.add('item')
// 	const h3 = document.querySelector('h3')
// 	h3.textContent = 'Заголовок'
// 	const p = document.querySelector('p')
// 	p.textContent = 'текст текст текст'

// 	div.append(h3, p)
// 	blockEle.append(div)
// })

// Другий спосіб
// btnEl.addEventListener('click', elem => {
// 	const markup = `
// 		<div class='item'>
// 			<h3>Заголовок</h3>
// 			<p>текст текст текст</p>
// 		</div>`
// 	blockEle.insertAdjacentHTML('beforeend', markup)
// })

// Виводимо кнопку с текстом "Змінити" і два инпути, при натисканні на кнопку інпути змінюються своїм введеним текстом
// <input type="text" id="js-input1" value="!!!!!!!!!!">
// <input type="text" id="js-input2" value="??????????">
// <button type="button" class="btn">Змінити</button>

// const input1El = document.querySelector('#js-input1')
// const input2El = document.querySelector('#js-input2')
// const btn = document.querySelector('.btn')

// btn.addEventListener('click', e => {
// 	// const value1 = input1El.value
// 	// input1El.value = input2El.value
// 	// input2El.value = value1
// 	;[input1El.value, input2El.value] = [input2El.value, input1El.value]
// })

// Натискання на кнопку "SHOW ME" має виводити значення з поля введення в alert
// <div>
// 	<button id='alertButton'>SHOW ME</button>
// 	<input id='alertInput' type='text' value='Hello world!' />
// </div>
// const button = document.querySelector('#alertButton')
// const input = document.querySelector('#alertInput')

// button.addEventListener('click', () => {
// 	const value = input.value
// 	alert(value)
// })

// Кнопка "Приховати" ховає текст і замінює назву кнопки на "Розкрити", при повторному натисканні текст знов стає доступним і кнопка набуває початкового вигляду
// <div>
// 	<input id='passwordInput' value='pass123456' type='password' />
// 	<button id='passwordButton'>Розкрити</button>
// </div>

// const passwordInput = document.getElementById('passwordInput')
// const passwordButton = document.getElementById('passwordButton')

// passwordButton.addEventListener('click', () => {
// 	// if (passwordInput.type === 'password') {
// 	// 	passwordInput.type = 'text'
// 	// 	passwordButton.textContent = 'Приховати'
// 	// } else {
// 	// 	passwordInput.type = 'password'
// 	// 	passwordButton.textContent = 'Розкрити'
// 	// }

// 	// passwordInput.type === 'password'
// 	// 	? ((passwordInput.type = 'text'), (passwordButton.textContent = 'Приховати'))
// 	// 	: ((passwordInput.type = 'password'), (passwordButton.textContent = 'Розкрити'))

// 	const toggle = passwordInput.type === 'password'
// 	passwordInput.type = toggle ? 'text' : 'password'
// 	passwordButton.textContent = toggle ? 'Приховати' : 'Розкрити'
// })
// console.dir(passwordInput)

// Кнопка "Зменшити" робить квадрат менше на 10 пікселів, кнопка "Збільшити" - більше на 10 пікселів
// <style>
// 	#box {
// 		width: 30px;
// 		height: 30px;
// 		background: red;
// 	}
// </style>
// <div>
// 	<div id="box">
// 		<button id="decrease">Зменшити</button>
// 		<button id="increase">Збільшити</button>
// 	</div>
// </div>

// const boxEl = document.querySelector('#box')
// const decreaseEl = document.querySelector('#decrease')
// const increaseEl = document.querySelector('#increase')

// let size = boxEl.clientWidth

// function updateSizeEl() {
// 	boxEl.style.width = size + 'px'
// 	boxEl.style.height = size + 'px'
// }

// decreaseEl.addEventListener('click', () => {
// 	size -= 10
// 	updateSizeEl()
// })

// increaseEl.addEventListener('click', () => {
// 	size += 10
// 	updateSizeEl()
// })

// console.dir(boxEl)

// <form class='form'>
// 	<input type='text' name='name' />
// 	<input type='email' name='email' />
// 	<button type='submit'>send</button>
// </form>

// const form = document.querySelector('.form')

// form.addEventListener('submit', event => {
// 	event.preventDefault()
// 	const { name, email } = event.target.elements
// 	const obj = {
// 		name: name.value,
// 		email: email.value,
// 	}
// 	console.log(event.target.elements)
// 	console.log(name, email)
// 	console.log(obj)
// })

// form.addEventListener('submit', event => {
// 	event.preventDefault()
// 	const obj = Object.fromEntries(new FormData(event.target))
// 	console.log(obj)
// })

// Напишіт інтерфейс створення списку
// Для кожного пункту:
// 1) Запитуйте вміст пункту користувача за допомогою prompt
// 2) Створюйте елемент <li> і додайте його до <ul>
// 3) Процес переривається, коли користувач натискає/вводить порожній рядок
// 4) Усі елементи мають створюватися динамічно
// <ul class='list'></ul>

// const list = document.querySelector('.list')
// let value = null
// const arr = []

// do {
// 	value = prompt('Enter text')
// 	if (value) arr.push(`<li>${value}</li>`)
// } while (value)

// list.insertAdjacentHTML('beforeend', arr.join(''))
