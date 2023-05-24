const config = require('../config');
const testConstants = require('./testConstants');


// DELETE Test 1 checks that deleting an existing order returns a 200 status code

test('Should be 200 status code for deleting an existing order', async () => {
	try {
		// Creating an order
		const postResponse = await fetch(`${config.API_URL}/api/v1/orders`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(testConstants.PRODUCTS_LIST_REQUEST_BODY)
		});
		const postResponseJson = await postResponse.json()
		// Assigning the newly created order id to the orderId variable
		const orderId = postResponseJson["id"];

		// Deleting the new order
		const deleteResponse = await fetch(`${config.API_URL}/api/v1/orders/${orderId}`, {
			method: 'DELETE'
		});
		// actualStatus variable assignment
		const actualDeleteStatus = deleteResponse.status;
	} catch (error) {
		console.error(error);
	}
	// Checking that the actual status is 200
	console.log(actualDeleteResponse);
	expect(actualDeleteStatus).toBe(200);
});


// DELETE Test 2 checks that deleting an existing order returns returns a correct message

test('Should be an {"ok": true} JSON response to deleting an existing order', async () => {
	let deleteResponse;
	let actualDeleteResponse;
	let orderId;
	try {
		// Creating an order
		const postResponse = await fetch(`${config.API_URL}/api/v1/orders`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(testConstants.PRODUCTS_LIST_REQUEST_BODY)
		});
		const postResponseJson = await postResponse.json()
		// Assigning the newly created order id to the orderId variable
		orderId = postResponseJson["id"];

		// Deleting the new order
		deleteResponse = await fetch(`${config.API_URL}/api/v1/orders/${orderId}`, {
			method: 'DELETE'
		});
		// Assigning the response body value to the actualDeleteResponse variable
		actualDeleteResponse = await deleteResponse.json()
	} catch (error) {
		console.error(error);
	}
	// Checking that the actual response body matches documentation
	expect(actualDeleteResponse).toEqual(testConstants.OK_TRUE_DOC_RESPONSE);
});