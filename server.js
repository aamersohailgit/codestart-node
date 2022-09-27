var port = process.env.PORT || 3000;
var express = require('express');

var app = express();

app.get('/', function (req, res) {
  res.send({
    "Output": "Hi progra@mers"
  });
});

app.post('/', function (req, res) {
  res.send({
    "Output": "Hi progra@mers"
  });
});

app.listen(port);
module.exports = app;