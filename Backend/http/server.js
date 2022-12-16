var app = require('./app');
var server = require('http').createServer(app);
require('dotenv').config();
const port = process.env.PORT;

server.listen(port, function () {
    console.log(process.env.NODE_ENV)
    console.log("Express server has started on port : " + port);
});