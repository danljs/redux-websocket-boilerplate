'use strict';
let SERVER_CORE_HOST='127.0.0.1'
let WS_PORT = '8181'
let WebSocketServer = require('ws').Server
let wss = new WebSocketServer({host:SERVER_CORE_HOST,port:WS_PORT ,path:'/server'})

wss.on('connection', ws => {
  	ws.on('message', message => {
    	console.log('received: %s', message)
  	})

  	ws.send('something')
})

console.log('WebSocketServer is listening at ws://%s:%s',SERVER_CORE_HOST,WS_PORT)