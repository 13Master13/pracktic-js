// HW-1-1

// function makeTransaction(quantity, pricePerDroid) {
// 	let totalPrice = quantity * pricePerDroid
// 	return `You ordered ${quantity} droids worth ${totalPrice} credits!`
// }

// console.log(makeTransaction(5, 3000)) // "You ordered 5 droids worth 15000 credits!"
// console.log(makeTransaction(3, 1000)) // "You ordered 3 droids worth 3000 credits!"
// console.log(makeTransaction(10, 500)) // "You ordered 10 droids worth 5000 credits!"

// HW-1-2

// function getShippingMessage(country, price, deliveryFee) {
// 	let totalPrice = price + deliveryFee
// 	return `Shipping to ${country} will cost ${totalPrice} credits`
// }

// console.log(getShippingMessage('Australia', 120, 50)) // "Shipping to Australia will cost 170 credits"
// console.log(getShippingMessage('Germany', 80, 20)) // "Shipping to Germany will cost 100 credits"
// console.log(getShippingMessage('Sweden', 100, 20)) // "Shipping to Sweden will cost 120 credits"

// HW-1-3

// function getElementWidth(content, padding, border) {
// 	let elementWidth = (parseFloat(padding) + parseFloat(border)) * 2 + parseFloat(content)
// 	return elementWidth
// }

// console.log(getElementWidth('50px', '8px', '4px')) // 74
// console.log(getElementWidth('60px', '12px', '8.5px')) // 101
// console.log(getElementWidth('200px', '0px', '0px')) // 200

// HW-2-1

// function makeTransaction(quantity, pricePerDroid, customerCredits) {
// 	let totalPrice = quantity * pricePerDroid
// 	if (totalPrice > customerCredits) {
// 		return `Insufficient funds!`
// 	} else {
// 		return `You ordered ${quantity} droids worth ${totalPrice} credits!`
// 	}
// }

// console.log(makeTransaction(5, 3000, 23000)) // "You ordered 5 droids worth 15000 credits!"
// console.log(makeTransaction(3, 1000, 15000)) // "You ordered 3 droids worth 3000 credits!"
// console.log(makeTransaction(10, 5000, 8000)) // "Insufficient funds!"
// console.log(makeTransaction(8, 2000, 10000)) // "Insufficient funds!"
// console.log(makeTransaction(10, 500, 5000)) // "You ordered 10 droids worth 5000 credits!"

// HW-2-2

// function formatMessage(message, maxLength) {
// 	if (message.length <= maxLength) {
// 		return message
// 	} else {
// 		return message.slice(0, maxLength) + '...'
// 	}
// }

// console.log(formatMessage('Curabitur ligula sapien', 16)) // "Curabitur ligula..."
// console.log(formatMessage('Curabitur ligula sapien', 23)) // "Curabitur ligula sapien"
// console.log(formatMessage('Vestibulum facilisis purus nec', 20)) // "Vestibulum facilisis..."
// console.log(formatMessage('Vestibulum facilisis purus nec', 30)) // "Vestibulum facilisis purus nec"
// console.log(formatMessage('Nunc sed turpis a felis in nunc fringilla', 15)) // "Nunc sed turpis..."
// console.log(formatMessage('Nunc sed turpis a felis in nunc fringilla', 41)) // "Nunc sed turpis a felis in nunc fringilla"

// HW-2-3

// function checkForSpam(message) {
// 	const mes = message.toLowerCase()
// 	if (mes.includes('spam') || mes.includes('sale')) {
// 		return true
// 	} else {
// 		return false
// 	}
// }

// console.log(checkForSpam('Latest technology news')) // false
// console.log(checkForSpam('JavaScript weekly newsletter')) // false
// console.log(checkForSpam('Get best sale offers now!')) // true
// console.log(checkForSpam('Amazing SalE, only tonight!')) // true
// console.log(checkForSpam('Trust me, this is not a spam message')) // true
// console.log(checkForSpam('Get rid of sPaM emails. Our book in on sale!')) // true
// console.log(checkForSpam('[SPAM] How to earn fast money?')) // true

// HW-2-4

// function getShippingCost(country) {
// 	let price
// 	switch (country) {
// 		case 'China':
// 			price = 100
// 			return `Shipping to ${country} will cost ${price} credits`
// 			break
// 		case 'Chile':
// 			price = 250
// 			return `Shipping to ${country} will cost ${price} credits`
// 			break
// 		case 'Australia':
// 			price = 170
// 			return `Shipping to ${country} will cost ${price} credits`
// 			break
// 		case 'Jamaica':
// 			price = 120
// 			return `Shipping to ${country} will cost ${price} credits`
// 			break

// 		default:
// 			return `Sorry, there is no delivery to your country`
// 			break
// 	}
// }

// console.log(getShippingCost('Australia')) // "Shipping to Australia will cost 170 credits"
// console.log(getShippingCost('Germany')) // "Sorry, there is no delivery to your country"
// console.log(getShippingCost('China')) // "Shipping to China will cost 100 credits"
// console.log(getShippingCost('Chile')) // "Shipping to Chile will cost 250 credits"
// console.log(getShippingCost('Jamaica')) // "Shipping to Jamaica will cost 120 credits"
// console.log(getShippingCost('Sweden')) // "Sorry, there is no delivery to your country"

// HW-3-1

// function slugify(title) {
// 	return title.toLowerCase().split(' ').join('-')
// }

// console.log(slugify('Arrays for begginers')) // "arrays-for-begginers"
// console.log(slugify('English for developer')) // "english-for-developer"
// console.log(slugify('Ten secrets of JavaScript')) // "ten-secrets-of-javascript"
// console.log(slugify('How to become a JUNIOR developer in TWO WEEKS')) // "how-to-become-a-junior-developer-in-two-weeks"

// HW-3-2

// function makeArray(firstArray, secondArray, maxLength) {
// 	const newArray = firstArray.concat(secondArray)
// 	if (newArray.length > maxLength) {
// 		return newArray.slice(0, maxLength)
// 	} else {
// 		return newArray
// 	}
// }

// console.log(makeArray(['Mango', 'Poly'], ['Ajax', 'Chelsea'], 3)) // ["Mango", "Poly", "Ajax"]
// console.log(makeArray(['Mango', 'Poly', 'Houston'], ['Ajax', 'Chelsea'], 4)) // ["Mango", "Poly", "Houston", "Ajax"]
// console.log(makeArray(['Mango'], ['Ajax', 'Chelsea', 'Poly', 'Houston'], 3)) // ["Mango", "Ajax", "Chelsea"]
// console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 2)) // ["Earth", "Jupiter"]
// console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 4)) // ["Earth", "Jupiter", "Neptune", "Uranus"]
// console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus', 'Venus'], 0)) // []

// HW-3-3

// function filterArray(numbers, value) {
// 	const newArr = []
// 	for (const number of numbers) {
// 		if (number > value) {
// 			newArr.push(number)
// 		}
// 	}
// 	return newArr
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3)) // [4, 5]
// console.log(filterArray([1, 2, 3, 4, 5], 4)) // [5]
// console.log(filterArray([1, 2, 3, 4, 5], 5)) // []
// console.log(filterArray([12, 24, 8, 41, 76], 38)) // [41, 76]
// console.log(filterArray([12, 24, 8, 41, 76], 20)) // [24, 41, 76]

// HW-4-1

// function isEnoughCapacity(products, containerSize) {
// 	let sum = 0
// 	for (const key of Object.values(products)) {
// 		sum += key
// 	}
// 	return sum <= containerSize
// }

// console.log(isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)) // true

// console.log(isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)) // false

// console.log(isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14)) // true

// console.log(isEnoughCapacity({ apples: 18, potatoes: 5, oranges: 2 }, 7)) // false

// HW-4-2
