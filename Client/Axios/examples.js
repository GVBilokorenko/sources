import Client from "./requests/client.js";

const client = new Client("http://localhost:8000");

(async function() {
	// Scenario 1: Get all catalog
	console.log(await client.getCatalog());

	// Scenario 2: Get specific item from catalog
	console.log(await client.getCatalogId(1));

	// Scenario 3: Send data
	console.log(await client.postCatalog({ name: "Test" }));
})();
