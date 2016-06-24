'use strict'

let express = require('express'),
    path = require('path'),
    fs = require('fs'),
    report = require('./src/report')

let app = express()
let rootDir = path.resolve(path.dirname(module.uri))

let tmp_dir = __dirname + '/tmp';
!!!fs.existsSync(tmp_dir) ? fs.mkdirSync(tmp_dir) : ''

app.use(express.static(rootDir))

app.use( function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
})

app.get('/', (req, res) => {
  res.send('Hello!')
})

app.get('/pdf', (req, res) => {
  report.create(req.data, binary => {
    let file_name = tmp_dir + '/test.pdf'
    fs.writeFile(file_name, binary , err => {
      if (err) { return console.log(err)}
      res.download(file_name)
    })
    }, error => res.send('ERROR:' + error)
  )
})

let port = process.env.PORT || 1234
app.listen(port, () => console.log('http server listening on %d', port))