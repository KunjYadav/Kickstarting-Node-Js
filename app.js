const http = require('http');

const server = http.createServer((req, res) => {
    res.write('Kunj Yadav!');
    res.end();
});
server.listen(4000);