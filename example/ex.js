'use strict';
let les = require("..");
let rp = require("request-promise");

les(url => rp(url), (res, headers, method, url, body) =>{
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end("aaaaaaa");
}).then(console.log)
