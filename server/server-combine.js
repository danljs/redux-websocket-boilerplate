'use strict'
module.exports = (() => {
  let http    = require('http'),
      express = require('express'),
      fs      = require('fs'),
      report = require('./src/report'),
      wss = require('./src/ws_server'),
      app = express();

  let tmp_dir = __dirname + '/tmp';
  !!!fs.existsSync(tmp_dir) ? fs.mkdirSync(tmp_dir) : ''

  app.use(express.static(__dirname));
  app.use((req, res, next) => {
      res.header("Access-Control-Allow-Origin", "*")
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
      next()
  })

  app.get('/', (req, res) => res.send('Hello!'))

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

  let server = http.createServer(app)
  wss({server : server})
  server.listen('1234', 'localhost', () => console.log('Node server started on 1234'))
}())