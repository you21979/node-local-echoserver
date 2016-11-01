'use strict';
const rp = require("request-promise");
const WebSocket = require('ws');
const les = require("..");


les(url => new Promise((resolve,reject)=>{
    const ws = new WebSocket(url.replace("http://","ws://"));
    let res = {};
    ws.on('open', ()=>{
console.log("cl ws open")
        ws.send("aaaaaa", { binary: false, mask: true });
    })
    ws.on('message', (msg)=>{
console.log("cl msg recv: " + msg)
        res.msg = msg
        ws.close()
    })
    ws.on('close', ()=>{
console.log("cl ws close")
        resolve(res.msg)
    })
}), (res, headers, method, url, body) =>{
}, 3000, ws => {
    ws.on("connection", conn => {
console.log("sv ws open")
        conn.on("close", (msg) => {
console.log("sv ws close")
        })
        conn.on("message", (msg) => {
console.log("sv msg recv: " + msg)
            conn.send("bbbbbbb", { binary: false, mask: true })
        })
    })
}).then(console.log)
