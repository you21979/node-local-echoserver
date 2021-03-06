var http = require("http");
var Promise = require("bluebird");
var WebSocketServer = require('ws').Server;

var defaultResponse = function(res, headers, method, url, body){
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(body);
}

var localEchoServer = module.exports = function(promisefunc, responsefunc, port, wsfunc){
    var host = "127.0.0.1";
    port = port || 3000;
    responsefunc = responsefunc || defaultResponse;
    return new Promise(function(resolve, reject){
        var sv = http.createServer(function (req, res) {
            var body = '';
            var headers = req.headers;
            var url = req.url;
            var method = req.method;
            req.setEncoding('utf8');
            req.on('data', function(chunk) {
                body += chunk;
            });
            req.on('end', function() {
                responsefunc(res, headers, method, url, body);
            });
        }).listen(port, host, function(){
            var uri = 'http://' + host + ':' + port;
            Promise.all([promisefunc(uri)])
                .then(function(res){
                    ws.close();
                    sv.close();
                    resolve(res[0]);
                })
                .catch(function (err) {
                    ws.close();
                    sv.close();
                    reject(err);
                })
        });
        var ws = new WebSocketServer({ server: sv })
        if(wsfunc instanceof Function){
            wsfunc(ws)
        }
    });
}

