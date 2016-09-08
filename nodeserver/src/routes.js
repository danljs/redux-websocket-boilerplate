"use strict"
module.exports = (() => {
	return {
		dispatch: (msg, response) =>{
			console.log(msg)
      response.send({received : msg})
      require('./db_server').insert()
		}
	}
})()