'use strict';
const http = require('http');
const express = require('express');
const fs = require('fs');
const report = require('./src/report');
const wss = require('./src/ws_server');

module.exports = (() => {
  const app = express();
  const tmp_dir = `${__dirname}/tmp`;
  if (!fs.existsSync(tmp_dir)) { fs.mkdirSync(tmp_dir); }

  app.use(express.static(__dirname));
  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });

  app.get('/', (req, res) => res.send('Hello!'));

  app.get('/pdf', (req, res) => {
    report.create(req.data, (binary) => {
      const file_name = `${tmp_dir}/test.pdf`;
      fs.writeFile(file_name, binary, (err) => {
        if (err) { return console.log(err); }
        return res.download(file_name);
      });
    }, error => res.send(`ERROR:${error}`));
  });

  const server = http.createServer(app);
  wss({ server });
  server.listen('1234', 'localhost', () => console.log('Node server started on 1234'));
})();
