'use strict'

const app = require('express')()
const logger = require('../lib/logger')
const Users = require('../models')



app.post('/user', function(req, res){
	logger.info ('POST', req.body)

	const users = new Users({
		userName: 'Michael',
		userLastName : 'Jackson',
		userEmal : 'any@email.com',
		userCompany : 'EPN',
		userRol : 'admin'
	})

	users.save(function(err){
		if(err) logger.error('Error to create user: ' + err)
		else logger.info('User was create')

		res.send(users)
	})
})

module.exports = app;