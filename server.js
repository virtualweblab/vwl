'use strict'

const express = require('express')
const logger = require('./lib/logger')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const path = require('path')

const routes = require('./routes/index')
const users = require('./routes/users') 

mongoose.connect('mongodb://localhost/users', function(err, res){
	if(err) logger.error('Error: to connecting to Database. ' + err)
	else logger.info('Connected to Database')
})


const app = express()
const port = process.env.PORT || 8000

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'html');

app.use(bodyParser.json('application/json'))
app.use(express.static(path.join(__dirname, 'public')))


app.use('/', routes)
app.use('/users',users)

if(!module.parent){
	app.listen(port, onListening)
}


function onListening(){
	logger.info(`Server running in port ${port}`)
}
module.exports = app