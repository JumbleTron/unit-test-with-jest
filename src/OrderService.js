import PaymentService from "./PaymentService.js";
import StripeProvider from "./StripeProvider.js";

export default class OrderService {
	constructor() {
		this.products = []
		this.paymentService = new PaymentService(new StripeProvider());
	}

	addProduct(product) {
		this.products.push(product);
	}

	processPayment() {
		this.paymentService.pay(this.getTotalAmount());
	}

	getTotalAmount() {
		return this.products.reduce((sum, product) => {
			if (product.hasOwnProperty('price')) {
				console.log(product.getNameWithPrice())
				return sum + product.price;
			}
			return sum;
		}, 0)
	}
}
