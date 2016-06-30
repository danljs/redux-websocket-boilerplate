"use strict"
let WebSocketServer = require('ws').Server,
    routes = require('./routes')
module.exports = (options) => {
    //options: {server : server, host : host, port : port, path : path}
    let wss = new WebSocketServer(options)
    wss.on('connection', ws => {
        console.log('A ws client connected.')
        ws.on('message', msg => {
            msg = JSON.parse(msg)
            routes.dispatch(msg, response)
        })
        ws.on('close', () => console.log('A ws client disconnected.'))
        ws.on('error', () => console.log(e))

        let response = {
          send : (msg, cb) => {
            cb = cb || (() => {})
            ws.send(JSON.stringify(msg), err => ws.readyState === 3 ? cb() : cb(err))
          },
          broadcast : msg => wss.clients.map(c => c.send(JSON.stringify(msg)))
        }
    }
)}