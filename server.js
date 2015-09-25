'use strict'

const http = require('http')
const router = require('./router') 
const logger = require('./lib/logger')

const port = process.env.PORT || 8000
const server = http.createServer()

server.on('request', router)
server.on('listening', onListening)

server.listen(port)

function onListening(){
	logger.info(`Server running in port ${port}`)
}
