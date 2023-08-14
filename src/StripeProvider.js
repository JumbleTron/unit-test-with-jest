export default class StripeProvider {
	pay(amount) {
		console.log(`Paid: ${amount}`);
	}
	debug() {
		console.log('debug method')
	}
}
