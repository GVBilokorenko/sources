import fetch from "node-fetch";

class requests {
	constructor(baseUrl) {
		this.baseUrl = baseUrl;
	}

	get(path) {
		return fetch(`${this.baseUrl}${path}`)
			.then(res => {
				return res.json();
			})
			.then(data => {
				return data;
			});
	}

	post(path, data) {
		return fetch(`${this.baseUrl}${path}`, {
			method: "POST",
			body: JSON.stringify(data)
		}).then(res => {
			return res.text();
		});
	}
}

export default requests;
