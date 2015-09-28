'use strict'

const app = require('express')()
const logger = require('../lib/logger')
const Users = require('../models')

//POST - Add a new User
app.post('/user', function (req, res){

	logger.info(req.method, req.path, req.body)
	res.set('Content-Type','application/json')

	if(req.body.userRol == '') req.body.userRol == 'admin'

	const users = new Users({
		userName 		: req.body.userName,
		userLastName 	: req.body.userLastName,
		userEmail 		: req.body.userEmal,
		userCompany 	: req.body.userCompany,
		userRol 		: req.body.userRol,
		userPassword 	: req.body.userPassword
	})

	users.save(function(err){
		if(err) logger.error('Error to create user: ' + err)
		else logger.info('User was create')

		res.send(users)
	})
})

//GET - Find all Users
app.get('/users', function (req, res){

	logger.info(req.method, req.path, req.body)
	res.set('Content-Type','application/json')

	Users.find(function(err, users) {
  		if(!err) {
            logger.info('GET /users')
  			res.json({users : users});
  		} else {
  			logger.info('ERROR: ' + err)
  		}
  	})
})

//GET - Find a user with a specific ID

app.get('/users/:user_id', function (req, res){

	logger.info(req.method, req.path, req.body)
	res.set('Content-Type','application/json')

	Users.findById(req.params.id, function(err, users) {
  		if(!err) {
            logger.info('GET /users/' + req.params.id)
  			res.send(users)
  		} else {
  			logger.error('ERROR: ' + err)
  		}
  	})

})

//PUT - Update a register already exists

app.put('/users/:user_id', function (req, res){

	logger.info(req.method, req.path, req.body)
	res.set('Content-Type','application/json')

	Users.findById(req.params.id, function(err, users) {
  		
  		userName 		= req.body.userName,
		userLastName 	= req.body.userLastName,
		userEmail 		= req.body.userEmal,
		userCompany 	= req.body.userCompany,
		userRol 		= req.body.userRol,
		userPassword 	= req.body.userPassword

  		Users.save(function(err) {
  			if(!err) logger.info('Updated')
  			else logger.error('ERROR: ' + err)
  			
  			res.send(users)
  		})
  	})
})

// DELETE - a specific user 
app.delete('/users/:user_id', function (req, res){

	logger.info(req.method, req.path, req.body)
	res.set('Content-Type','application/json')

	Users.findById(req.params.id, function(err, users) {
  		users.remove(function(err) {
  			if(!err) logger.info('Removed')
  			else logger.error('ERROR: ' + err)
  		})
  	})
})

module.exports = app;