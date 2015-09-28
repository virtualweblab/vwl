const xhr = require('xhr')
const domify = require('domify')

xhr({
	uri : '/users/users',
	method : 'get'
},function(err ,res, body){
	if(err) return console.log(err)

	console.log(JSON.parse(body))
})