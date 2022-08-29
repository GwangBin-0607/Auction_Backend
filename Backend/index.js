var express = require('express');
var app = express();
const port = 3100;

app.listen(port,function(){
    console.log("Express server has started on port : "+port);
});

app.get('/',function(req,res){
    res.send("Nginx startsssssswwwwwww`111111111");
});