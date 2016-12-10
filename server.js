var express = require('express');
var app = express();


app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
  res.send('this is the end');
});

app.listen(3000);