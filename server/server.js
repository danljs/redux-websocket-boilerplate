'use strict';
let HOST = '127.0.0.1';
let PORT = 8383;

let wss = require('./src/ws_server');
wss.start(HOST,PORT ,'/admin')
console.log('WebSocketServer is listening at ws://%s:%s',HOST,PORT)