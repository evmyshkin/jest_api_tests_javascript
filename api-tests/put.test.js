const config = require('../config');
const testConstants = require('./testConstants');


// PUT Test 1 checks that changing the kit returns a 200 status code

test('Should be 200 status code after changing the kit', async () => {
	let actualStatus
	try {
		const postResponse = await fetch(`${config.API_URL}/api/v1/kits`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(testConstants.PRODUCTS_LIST_REQUEST_BODY)
		});
		const postResponseJson = await postResponse.json()
		// Assigning the newly created kit id to the kitId variable
		const kitId = postResponseJson["id"];

		const response = await fetch(`${config.API_URL}/api/v1/kits/${kitId}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(testConstants.PRODUCTS_LIST_REQUEST_BODY)
		});
		// Assigning the actual response status code to the actualStatus variable
		actualStatus = response.status
	} catch (error) {
		console.error(error);
	}
	// Checking that the actual status is 200
	expect(actualStatus).toBe(200)
});


// PUT Test 2 checks that changing the kit response body structure is {"ok": true} as per apiDoc

test('Should be ok: true response body after changing the kit', async () => {
	let actualResponse
	try {
		const postResponse = await fetch(`${config.API_URL}/api/v1/kits`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(testConstants.PRODUCTS_LIST_REQUEST_BODY)
		});
		const postResponseJson = await postResponse.json()
		// Assigning the newly created kit id to the kitId variable
		const kitId = postResponseJson["id"];

		const response = await fetch(`${config.API_URL}/api/v1/kits/${kitId}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(testConstants.PRODUCTS_LIST_REQUEST_BODY)
		});
		// Assigning the actual response body parsed as JSON to the actualResponse variable
		actualResponse = await response.json()
	} catch (error) {
		console.error(error);
	}
	// Checking that the actual response body matches documentation
	expect(actualResponse).toEqual(testConstants.OK_TRUE_DOC_RESPONSE)
});
