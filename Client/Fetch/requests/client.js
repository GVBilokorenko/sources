import requests from "../common/http.js";

class Client {
	constructor(url) {
		this.requests = new requests(url);
	}

	getCatalog() {
		return this.requests.get("/catalog");
	}
	getCatalogId(id) {
		return this.requests.get(`/catalog/${id}`);
	}

	postCatalog(data) {
		return this.requests.post("/catalog/post", { data });
	}
}

export default Client;
