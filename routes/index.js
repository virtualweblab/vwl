'use strict'

const app = require('express')()
const logger = require('../lib/logger')
const path = require('path')


app.get('/', function (req, res){
	res.sendFile(path.join(__dirname + '/../views/index.html'));
})

module.exports = app