import StripeProvider from "../src/StripeProvider.js";
import PaymentService from "../src/PaymentService.js";
import { jest, describe, expect, test } from '@jest/globals'

jest.mock('./StripeProvider', () => {
	return jest.fn().mockImplementation(() => {
		return {
			pay: jest.fn(),
		};
	});
});

describe('Test pay method', () => {
	test('We can check if the consumer called the class constructor', () => {
		const paymentService = new PaymentService(new StripeProvider())
		paymentService.pay(500);
		expect(StripeProvider).toHaveBeenCalledTimes(1);
	})
});
