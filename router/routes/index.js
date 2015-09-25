'use strict'

const path = require('path')
const course = require('course')
const st = require('st')
const logger = require('../../lib/logger')

const router = course()
const db = {}

const mount = st({
	path: path.join(__dirname,'../..','public'),
	index : 'index.html',
	passthrough :  true
})


router.post('/user', function (req, res){
	logger.info('POST', req)

	/*var newUser = req.body.user

	newUser.id = Date.now()

	db[newUser.id] = newUser
	res.set('Content-Type', 'application/json')
	res.status(201)

	res.json({
		user:db[newUser.id]
	})*/
})



function onRequest(req, res){

	mount(req, res, function(err){
		if (err) return fail(err, res)

		router(req, res, function(err){
			if (err) return fail(err, res)

			res.statusCode = 404
			res.end(`404 not Found: ${req.url}`)
		})
	})
}

function fail(err,res){
	res.statusCode = 500
	res.setHeader('Content-Type','text/plain')
	res.end(err.message)
}

module.exports = onRequest
