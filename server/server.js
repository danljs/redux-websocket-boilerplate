'use strict';
let HOST = '127.0.0.1';
let PORT = 8585;

let wss = require('./src/ws_server');
wss(HOST, PORT, '/server');
console.log('WebSocketServer is listening at ws://%s:%s', HOST, PORT);