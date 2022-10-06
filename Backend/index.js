var express = require('express');
var app = express();
const port = 3100;

app.listen(port, function () {
    console.log(process.env.NODE_ENV)
    console.log("Express server has started on port : " + port);
});

app.get('/', function (req, res) {
    var property = "Hello awdadadaa"
    res.send(property);
});