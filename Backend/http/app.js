var app = require('express')();
var server = require('http').createServer(app);
require('dotenv').config();
const port = process.env.PORT;
const routes = require('./router');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use('/', routes);

server.listen(port, function () {
    console.log(process.env.NODE_ENV)
    console.log("Express server has started on port : " + port);
});
