const express = require('express');
const carsRouter = require('./router/carsRouter.js')
const server = express();
const knex = require('knex')
const config = require('./knexfile.js')
server.use(express.json());
server.use(logger)
server.use('/api/cars', carsRouter)
function logger(req, res, next) {
	console.log(`[${new Date().toISOString()}] - ${req.method} - ${req.url} - ${req.get("User-Agent")}`)
	next()
}

server.use((err, req, res, next) => {
	res.status(500).json({
		message: "Oops, something went wrong", err
	})
})

module.exports = server;