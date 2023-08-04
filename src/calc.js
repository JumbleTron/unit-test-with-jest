export const calc = (num1, num2, operation = '+') => {
	if (operation === '+') {
		return num1 + num2;
	}
	if (operation === '-') {
		return num1 - num2;
	}
	if (operation === '*') {
		return num1 * num2;
	}
	if (operation === '/') {
		if (num2 === 0) {
			throw new Error('Can`t divide by 0')
		}
		return num1 / num2;
	}

	throw new Error(`Invalid operation supported +, -, *, / provided: ${operation}`)
}
