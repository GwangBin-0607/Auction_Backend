//@ts-check
var app = require('express')();
const routes = require('./routes');
const bodyParser = require('body-parser');
const mockData = require('./MockData/insertMockData');
(async function(){
    try{
        await mockData.insertProduct_UpDown()
    }catch(e){
        console.log("Error");
    }
})();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use('/', routes);
module.exports = app
