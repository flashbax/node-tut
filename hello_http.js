var http = require('http'); //module into var

var server = http.createServer(function(req, res) { //The argument passed into this call is a closure that is called whenever an http request comes in.
    res.writeHead(200)
    res.end('Hello HTTP');
});
server.listen(8080); //tell node.js the port on which we want our server to run