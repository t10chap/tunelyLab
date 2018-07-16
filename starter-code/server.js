var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.get('/', function homepage(req, res){
  res.sendFile('views/index.html', {root: __dirname})
});

app.use(express.static('public'));


app.listen(process.env.port || 3001, function(){
  console.log('Express erver is running on http://localhost:3001/');
});
