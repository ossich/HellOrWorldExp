const http = require('http');

const server = http.createServer((req,res) => {

    if (req.url === '/') {
        res.write('Hello World!');
        res.end;
    }

    if (res.url === '/api') {
        res.write(JSON.stringify([1,2,3]));
        res.end;
    }
});

server.listen(3000);