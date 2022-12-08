var app = require('express')();
var server = require('http').createServer(app);
require('dotenv').config();
const port = process.env.PORT;
const routes = require('./router');

app.use('/aa', routes);
const db=require('./Database/models/index');
  const list = async ()=>{
    const result = await db.products.findAll({
        include:
        {model:db.product_images}
        ,
        plain:true
    }).catch((err) => console.log(err));
    console.log(result);
    return result
  }
  list();

server.listen(port, function () {
    console.log(process.env.NODE_ENV)
    console.log("Express server has started on port : " + port);
});
