var express = require('express');

var port = 5000;

var app = express();

app.use(express.static('public'));
app.use(express.static('src/views'));

app.get('/',function(req,res){
  res.send("Hello World!!");
});

app.get('/books',function(req,res){
  res.send("Hello books!!");
});

app.listen(port,function(err){
  console.log('App server is running on port: '+port);
});
