const express = require('express');
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


const server = http.createServer(app);
server.listen(port,() =>{ console.log('running.....')});






