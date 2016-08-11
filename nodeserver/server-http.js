'use strict'
module.exports = (() => {
  let http = require('http'),
      report = require('./src/report')

  let server = http.createServer((req, res) => {

    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")

    switch(req.url){
    case '/': 
      res.end('Hello!')
      break
    case '/pdf':
      console.log('asdfdsfdas')
      report.create(req.data, binary => res.end(binary), error => res.send('ERROR:' + error))
      break
    default:
    }
  });

  server.listen(1234, 'localhost', () => console.log(`Application worker ${process.pid} started...`))
})()