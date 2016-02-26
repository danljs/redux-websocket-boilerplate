"use strict"
let WebSocketServer = require('ws').Server;

let wss = {}
let start = function (host,port,path) {
    wss = new WebSocketServer({host:host,port:port ,path:path})
    wss.on('connection', router);
}

let router = function (ws) {

    ws.on('message', on_message)
    ws.on('close', on_close)
    ws.on('error', on_error)

    function on_error(){
        console.log(e)
    }

    function on_close(){
    }
    
    function on_message(msg) {
        msg = JSON.parse(msg)
    }

    function send(msg, cb) {
        cb = cb || function () {}
        ws.send(JSON.stringify(msg), err => {return ws.readyState === 3 ? cb():cb(err)})
    }

    function broadcast(msg){
        wss.clients.map(c=>{c.send(JSON.stringify(msg))})
    }

}
module.exports = {start,router}