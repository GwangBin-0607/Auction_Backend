var express = require('express');
var app = express();
require('dotenv').config();
const port = process.env.PORT;

app.listen(port, function () {
    console.log(process.env.NODE_ENV)
    console.log("Express server has started on port : " + port);
});
function tt(Path,Handler){
    try{
        Handler()
    }catch(error){
        console.log("ERROR")
        console.log(error)
    }
}

app.get('/home', function (req, res) {
    var property = "CD Complete"
    tt("gg",()=>{
        let t = new Test();
        t.hello();
    })
    try{
        let t = new Test();
        t.hello();
    }catch(error){
        console.log(error);
    }
    console.log("hello");
    res.send(property);
});
class Test{

}