'use strict'

const express = require('express')
const router = require('./router') 
const logger = require('./lib/logger')
const bodyParser = require('body-parser')


const app = module.exports = express()
const port = process.env.PORT || 8000

app.use(bodyParser.json('application/json'))


app.use(router)

if(!module.parent){
	app.listen(port, onListening)
}


function onListening(){
	logger.info(`Server running in port ${port}`)
}
