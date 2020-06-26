const express = require('express');
var mysql =require('mysql')
var bodyParser = require('body-parser');
const app = express();
const http = require('http');
const path = require('path');
const port = process.env.PORT || 5555;
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/dist/firstApp'))); // host index.html file
app.get('*',(req,res) =>
{
  res.writeHead(301,{Location: '/index.html'});
  res.end();
});

var db = mysql.createConnection({
    host: "127.0.0.1",
  user:'root',
  password:'12345678',
  database:'',
  port: 3306
});
db.connect(function (err) {
  if(!!err){
    console.log('error',err);
  }else {
    console.log('my sql connected');
  }

});








