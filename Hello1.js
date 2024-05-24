
Http.createServer(function(req, res) {
    res.writeHead(200, {'content-type':"text/plain"});
    res.end("Hello");
}).listen(8080);
