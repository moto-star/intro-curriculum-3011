'use strict';
const http = require(`http`);
const fs = require('fs');

const htmlDara = fs.readFileSync('./index.html');
const server = http.createServer((req,res) => {
    res.writeHead(200,{
        'Content-Type': 'text/html; charset=utf-8'
    });
    res.write(htmlDara);
    res.end();
});
const port = 8000;
server.listen(port, () => {
    console.log(`Listening on ` + port);
});