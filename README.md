# node-local-echoserver

promised rest-api access module for localtest

## install

```
npm i local-echoserver
```

## example

```
'use strict';
const rp = require("request-promise");
const les = require("local-echoserver");

les(url => rp(url), (res, headers, method, url, body) =>{
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end("aaaaaaa");
}).then(console.log)
```


