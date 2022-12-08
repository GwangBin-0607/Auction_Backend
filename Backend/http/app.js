var app = require('express')();
var server = require('http').createServer(app);
require('dotenv').config();
const port = process.env.PORT;
const routes = require('./router');

app.use('/aa', routes);

server.listen(port, function () {
    console.log(process.env.NODE_ENV)
    console.log("Express server has started on port : " + port);
});
