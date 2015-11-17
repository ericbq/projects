var express = require('express');
var server = express();

server.get("./index.html");

server.listen(80);
console.log("Server running");