"use strict"
let WebSocketServer = require('ws').Server,
  db_server = require('./db_server'),
  wss = {}
module.exports = (options) => {
    //options: {server : server, host : host, port : port, path : path}
    wss = new WebSocketServer(options)
    wss.on('connection', ws => {
        console.log('A ws client connected.')
        ws.on('message', msg => {
            msg = JSON.parse(msg)
            console.log(msg)
            send({received : msg})
            db_server.insert()
        })
        ws.on('close', () => {console.log('A ws client disconnected.')})
        ws.on('error', () => {console.log(e)})
        let send = (msg, cb) => {
            cb = cb || () => {}
            ws.send(JSON.stringify(msg), err => {return ws.readyState === 3 ? cb() : cb(err)})
        }
        let broadcast = msg => {
            wss.clients.map(c => {c.send(JSON.stringify(msg))})
        }
    }
)}