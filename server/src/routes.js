"use strict"
let db_server = require('./db_server')
module.exports = (() => {
	return {
		dispatch: (msg, response) =>{
			console.log(msg)
      response.send({received : msg})
      db_server.insert()
		}
	}
})()