var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('Hello World!');
});


//Boilerplate code to start up the web server
var server = app.listen(process.env.PORT, process.env.IP, function(){
    var host = server.address().address;
    var port = server.address().port;
    
    console.log("Example app listening at http://", host, port);
});