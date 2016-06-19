'use strict'
// let HOST = '127.0.0.1'
// let PORT = 8585

// let wss = require('./src/ws_server')
// wss(HOST, PORT, '/server')
// console.log('WebSocketServer is listening at ws://%s:%s', HOST, PORT)


let http = require('http'),
    express = require('express'),
    path = require('path'),
    fs = require('fs'),
    report = require('./src/report')

let app = express()
let rootDir = path.resolve(path.dirname(module.uri))

let tmp_dir = __dirname + '/tmp';
!!!fs.existsSync(tmp_dir) ? fs.mkdirSync(tmp_dir) : ''

app.use(express.static(rootDir))

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

var server = http.createServer(app);
var port = process.env.PORT || 1234;
server.listen(port);

console.log('http server listening on %d', port);