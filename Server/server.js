const express = require("express");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");
const swStats = require("swagger-stats");

const swaggerDocument = YAML.load("./openapi.yaml");

const catalog = require("./catalog.js");
// catalog - database emulation

const server = express();

server.use(swStats.getMiddleware({ swaggerSpec: swaggerDocument }));
server.use("/", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
server.use(cors());
server.use(express.json());

server.get("/catalog", (req, res) => {
	res.json(catalog);
});

server.get("/catalog/:id", (req, res) => {
	const { id } = req.params;
	const product = catalog.find(el => el.id == id);
	res.json(product);
});

server.post("/catalog/post", (req, res) => {
	console.log(req.body);
	res.send("Successfully sended data");
});

server.listen(8000, () => {
	console.log("Server is running");
});
