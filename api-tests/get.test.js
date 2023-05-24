const config = require('../config');


// GET Test 1 checks that getting the "Pasta" kit products list returns a 200 status code

test('Should be 200 status code for getting \"Pasta\" kit products list', async () => {
	try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/search?name=Pasta`);
		// Assigning the actual response status to the actualStatus variable
		const actualStatus = response.status;
	} catch (error) {
		console.error(error);
	}
	// Checking that the actual status is 200
	console.log(actualStatus);
	expect(actualStatus).toBe(200);
});


// GET Test 2 checks that every product in the "Pasta" kit has a name, a price and a weight

test('Should have a name, a price and a weight for every product in the \"Pasta\" kit', async () => {
	const productInfoArray = [];
	try {
		response = await fetch(`${config.API_URL}/api/v1/kits/search?name=Pasta`);
		const actualResponse = await response.json();
		for (let i = 0; i < actualResponse["productsList"].length; i++) {
			const name = actualResponse["productsList"][i]["name"]
			const price = actualResponse["productsList"][i]["price"];
			const weight = actualResponse["productsList"][i]["weight"];
			// Adding the actual name, price and weight booleans to the productInfoArray array
			productInfoArray.push(name.length > 0 && price > 0 && weight > 0);
		}
	} catch (error) {
		console.error(error);
	}
	// Checking that the actual result has only true booleans
	expect(productInfoArray).not.toContain(false);
	// This statement is needed to make sure the returned array is not empty
	expect(productInfoArray).toContain(true);
})