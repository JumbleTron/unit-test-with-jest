import { calc } from "../src/calc.js";
import { describe, test, expect } from '@jest/globals'

describe('Calculate function', () => {
	const num1 = 5;
	const num2 = 10;
	test('it should adding 2 numbers', () => {
		const result = 15;
		expect(calc(num1, num2, '+')).toEqual(result);
	})
	test('it should sub 2 numbers', () => {
		const result = -5;
		expect(calc(num1, num2, '-')).toEqual(result);
	})
	test('it should multiply 2 numbers', () => {
		const result = 50;
		expect(calc(num1, num2, '*')).toEqual(result);
	})
	test('it should throw errro divide by 0', () => {
		const result = 50;
		expect(() => calc(num1, 0, '/')).toThrow()
	})
	test('it should div 2 numbers', () => {
		const result = .5;
		expect(calc(num1, num2, '/')).toEqual(result);
	})
	test('invalid operation', () => {
		expect(() => calc(num1, num2, 'abc')).toThrow()
	})
});
