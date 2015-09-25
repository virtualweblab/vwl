'use strict'

const express = require('express')
const router = require('./router') 
const logger = require('./lib/logger')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/users', function(err, res){
	if(err) logger.error('Error: to connecting to Database. ' + err)
	else logger.info('Connected to Database')
})


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
