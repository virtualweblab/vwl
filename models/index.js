'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

var userSchema = new Schema({
	userName 		: { type : String},
	userLastName 	: { type : String},
	userEmal 		: { type : String},
	userCompany 	: { type : String},
	userRol 		: { type : String},
	userPassword 	: { type : String},
	provider 		: { type : String},
	provider_id 	: { type : String, unique : true},
	photo			: { type : String},
	createdAt		: { type : Date, default : Date.now}  
})

module.exports = mongoose.model('Users', userSchema)