const http = require('http');

http.createServer((req, res) => {
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.end(index.html);
	console.log("Serving on 30000");
}).listen(3000);