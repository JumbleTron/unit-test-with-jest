export default class PaymentService {
	constructor(paymentProvider) {
		this.paymentProvider = paymentProvider;
	}
	
	pay(amount) {
		try {
			this.paymentProvider.pay(amount);
		} catch (e) {
			//@todo add test for catch block
			this.paymentProvider.debug();
		}
	}
}
