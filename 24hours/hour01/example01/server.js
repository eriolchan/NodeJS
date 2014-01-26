var http = require('http');
http.createServer(function (req, res) {
    res. writeHead(200, {'Context-Type': 'text/plain'});
    res.end('I am programming in Node.js\n');
}).listen(10086, "127.0.0.1");
console.log('Server running at http://127.0.0.1:10086/');
