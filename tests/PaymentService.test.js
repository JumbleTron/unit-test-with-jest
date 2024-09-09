import PaymentService from "../src/PaymentService.js";
import { jest, describe, test, expect, afterEach } from '@jest/globals'

jest.unstable_mockModule('../src/StripeProvider.js', () => {
	return {
		default: function () {
			return {
				pay: jest.fn(),
				debug: jest.fn(),
			};
		},
	};
});

const StripeProvider = (await import('../src/StripeProvider.js')).default;

afterEach(() => {
	jest.restoreAllMocks();
});


describe('Test payment', () => {
	// test('We can check if the method called', async () => {
	// 	const stripeProvider = new StripeProvider();
	// 	const paymentService = new PaymentService(stripeProvider)
	// 	paymentService.pay(500);
	// 	expect(jest.spyOn(stripeProvider, 'pay')).toHaveBeenCalledTimes(1);
	// 	expect(jest.spyOn(stripeProvider, 'debug')).toHaveBeenCalledTimes(0);
	// })
	test('Check catch block', async () => {
		const stripeProvider = new StripeProvider();
		const paymentService = new PaymentService(stripeProvider)
		paymentService.pay(500);
		expect(jest.spyOn(stripeProvider, 'pay')).toHaveBeenCalledTimes(1);
		expect(jest.spyOn(stripeProvider, 'debug')).toHaveBeenCalledTimes(1);
	})
});
