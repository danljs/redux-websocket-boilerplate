'use strict'
let child_process = require('child_process')
let fs = require('fs')
module.exports = (() => {
	var child = child_process.spawn('ls',{
	    stdio: [
	      0, // Use parents stdin for child
	      'pipe', // Pipe child's stdout to parent
	      fs.openSync('err.out', 'w') // Direct child's stderr to a file
	    ]
	})
	
	console.log(child.stdio[0])
	var child1 = child_process.fork('server-ws.js')
	var child2 = child_process.fork('server-express.js')
})()