const express = require('express');
const server = express();

server.get('/', function(req, res) {
  res.send('server is running');
});

const port = 3000;

server.listen(3000, function() {
  console.log(`Servidor executando na porta ${port}`);
});