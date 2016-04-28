"use strict"
let WebSocketServer = require('ws').Server

let wss = {}
module.exports = (host, port, path) => {
    wss = new WebSocketServer({host : host, port : port, path : path})
    wss.on('connection', ws => {
        console.log('A ws client connected.')
        ws.on('message', msg => {
            msg = JSON.parse(msg)
            console.log(msg)
        })
        ws.on('close', () => {console.log('A ws client disconnected.')})
        ws.on('error', () => {console.log(e)})
        function send(msg, cb) {
            cb = cb || () => {}
            ws.send(JSON.stringify(msg), err => {return ws.readyState === 3 ? cb() : cb(err)})
        }
        function broadcast(msg){
            wss.clients.map(c => {c.send(JSON.stringify(msg))})
        }
    }
)}