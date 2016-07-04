'use strict'
let mongoose = require('mongoose'),
		Schema = mongoose.Schema,
		mySchema = Schema({name: String})

let model = global.db.model('MyModel', mySchema)

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
})()
