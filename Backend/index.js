var express = require('express');
var app = express();
require('dotenv').config();
const port = process.env.PORT;
const db=require('./Database/models');
const User = db.db.users;

const addUser = async (req, res) => {
    let info = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email:req.body.email
    };
  
    const user = await User.create(info).catch((err) => console.log(err));
    console.log(user);
  };
app.listen(port, function () {
    console.log(process.env.NODE_ENV)
    console.log("Express server has started on port : " + port);
});
app.get('/home', async function (req, res) {
    var property = "CD Complete good"

    const user = {
        body:{
        firstName:"Hello",
        lastName:"1234",
        email:"12312312"
    }
    };
    await addUser(user,"hello");
    res.send(property);
});