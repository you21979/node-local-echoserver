'use strict';
const rp = require("request-promise");
const les = require("..");

les(url => rp(url), (res, headers, method, url, body) =>{
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end("aaaaaaa");
}).then(console.log)
