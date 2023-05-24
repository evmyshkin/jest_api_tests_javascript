const config = require('../config');
const testConstants = require('./testConstants');


// POST Test 1 checks that creating a new order returns a 201 status code

test('Should be 201 status code when creating an order', async () => {
	let actualStatus;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/orders`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(testConstants.PRODUCTS_LIST_REQUEST_BODY)
		});
		// Assigning the actual response status to the actualStatus variable
		actualStatus = response.status;
	} catch (error) {
		console.error(error);
	}
	// Checking that the actual status is 201
	expect(actualStatus).toBe(201);
});


// POST Test 2 checks that courier service for the newly created order is "Order and Go"

test('Should be \"Order and Go\" courier service for the order', async () => {
	let actualResponse;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/orders`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(testConstants.PRODUCTS_LIST_REQUEST_BODY)
		});
		// Assigning the actual response body to the actualResponse variable
		actualResponse = await response.json();
	} catch (error) {
		console.error(error);
	}
	// Checking that the actual response parameter "courierService" has value "Order and Go"
	expect(actualResponse["courierService"]).toBe("Order and Go");
});