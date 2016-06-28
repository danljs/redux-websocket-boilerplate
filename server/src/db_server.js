'use strict'
let mongoose = require('mongoose'),
		Schema = mongoose.Schema,
		mySchema = Schema({name: String}),
		CONNECTION_STRING = 'mongodb://localhost:27017/boilerplate'

mongoose.Promise = require('bluebird')

global.db = mongoose.createConnection(CONNECTION_STRING);
db.on('connected', () => console.log('connected'))
db.on('error', () => console.log('connection error!!!'))

let model = db.model('MyModel', mySchema)

module.exports = (() => {
	return {
		home : (req, res) => {
  		model.find((err, docs) => {
		    res.send(docs);
		  })
		},

		modelName : (req, res) => {
		  res.send('my model name is ' + model.modelName);
		},

		insert : (req, res) => {
		  model.create({name: 'inserting ' + Date.now()}, (err, doc) => {
		    // res.send(doc);
		  })
		}
	}
}())
