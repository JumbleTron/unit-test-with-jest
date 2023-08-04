import PaymentService from "./PaymentService.js";
import StripeProvider from "./StripeProvider.js";

export default class OrderService {
	constructor() {
		this.products = []
		this.paymentService = new PaymentService(new StripeProvider());
	}

	addProduct(product): void {
		this.products.push(product);
	}

	processPayment(): void {
		this.paymentService.pay(this.getTotalAmount());
	}

	getTotalAmount(): number {
		return this.products.reduce((sum, product) => {
			if (product.hasOwnProperty('price')) {
				return sum + product.price;
			}
		})
	}
}
