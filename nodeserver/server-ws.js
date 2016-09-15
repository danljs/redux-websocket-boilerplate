'use strict'
module.exports = (() => {

  let mongoose = require('mongoose'),
    // Schema = mongoose.Schema,
    // mySchema = Schema({name: String}),
    CONNECTION_STRING = 'mongodb://localhost:27017/boilerplate'

  mongoose.Promise = require('bluebird')
  global.db = mongoose.createConnection(CONNECTION_STRING);
  db.on('connected', () => console.log('db connected'))
  db.on('error', () => console.log('connection error!!!'))

  let HOST = '127.0.0.1'
  let PORT = 8585

  let wss = require('./src/ws_server')
  wss({host : HOST, port : PORT, path : '/server'})
  console.log('WebSocketServer is listening at ws://%s:%s', HOST, PORT)
  
})()