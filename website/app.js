var express = require('express');
var app = express();

app.get('/', function(req, res){
        res.sendFile(__dirname + '/views/index.html');
    });

app.use('/css', express.static(__dirname + '/css'));
app.use('/resources', express.static(__dirname + '/resources'));

app.listen(80);
console.log("Server running");