'use strict';

let constants = require('./src/constants');
let wss = require('./src/ws_server');
wss.start(constants.SERVER_HOST,constants.WS_PORT ,'/admin')
console.log('WebSocketServer is listening at ws://%s:%s',constants.SERVER_HOST,constants.WS_PORT)