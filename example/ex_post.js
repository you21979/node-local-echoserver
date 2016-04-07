'use strict';
const rp = require("request-promise");
const les = require("..");

les(uri => rp({
        uri : uri,
        method : "POST",
        form : {
            name1 : "test1",
            name2 : "test2",
        },
        headers : {
        },
    }),
    (res, headers, method, url, body) =>{
        console.log(headers);
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end(body);
    }, 3001
).then(console.log)
les(uri => rp({
        uri : uri,
        method : "POST",
        json : {
            name1 : "test1",
            name2 : "test2",
        },
        headers : {
        },
    }),
    (res, headers, method, url, body) =>{
        console.log(headers);
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end(body);
    }, 3002
).then(console.log)
