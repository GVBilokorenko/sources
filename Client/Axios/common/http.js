import axios from "axios";

class requests {
	constructor(baseUrl) {
		this.baseUrl = baseUrl;
	}

	get(path) {
		return axios({
			method: "get",
			url: `${this.baseUrl}${path}`
		})
			.then(res => res.data)
			.catch(err => err.response);
	}

	post(path, data) {
		return axios({
			method: "post",
			url: `${this.baseUrl}${path}`,
			data
		})
			.then(res => res.data)
			.catch(err => err.response);
	}
}

export default requests;
