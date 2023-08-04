export default class PaymentService {
	constructor(paymentProvider) {
		this.paymentProvider = paymentProvider;
	}

	pay(amount) {
		this.paymentProvider.pay(amount);
	}
}
