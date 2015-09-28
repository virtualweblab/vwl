'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

var userSchema = new Schema({
	userName: { type : String},
	userLastName : { type : String},
	userEmal : { type : String},
	userCompany : { type : String},
	userRol : { type : String}
})

module.exports = mongoose.model('Users', userSchema)