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
		userRol : 'admin',
		userPassword : 'nnnnn'
	})

	users.save(function(err){
		if(err) logger.error('Error to create user: ' + err)
		else logger.info('User was create')

		res.send(users)
	})
})

app.get('/users', function(req, res){
	logger.info('GET', req.body)

})

app.get('/users/:user_id', function(req,res){
	logger.info('GET a single user', req.body)
})

app.put('/users/:user_id', function(req,res){
	logger.info('GET a single user', req.body)
})

app.delete('/users/:user_id', function(req,res){
	logger.info('GET a single user', req.body)
})

module.exports = app;