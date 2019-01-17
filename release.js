// ===================================================
// FOR PRODUCTION
// Total.js - framework for Node.js platform
// https://www.totaljs.com
// ===================================================

const options = {};

// options.ip = '127.0.0.1';
// options.port = parseInt(process.argv[2]);
// options.config = { name: 'Total.js' };
// options.sleep = 3000;

require('total.js').http('release', options);
// require('total.js').cluster.http(5, 'release', options);
const http = require('http');
const port=process.env.PORT || 3000
// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
    // res.setHeader('Content-Type', 'text/html');
    // res.end('<h1>Hello World</h1>');
});
server.listen(port,() => {
    console.log(`Server running at port `+port);
});
