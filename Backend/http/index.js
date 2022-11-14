var app = require('express')();
var server = require('http').createServer(app);
require('dotenv').config();
const port = process.env.PORT;
// const db=require('./Database/models');
// const User = db.db.users;

// const addUser = async (req, res) => {
//     let info = {
//         firstName: req.body.firstName,
//         lastName: req.body.lastName,
//         email:req.body.email
//     };
  
//     const user = await User.create(info).catch((err) => console.log(err));
//     console.log(user);
//   };

server.listen(port, function () {
    console.log(process.env.NODE_ENV)
    console.log("Express server has started on port : " + port);
});
app.get('/home', async function (req, res) {
    var property = "CD Complete good FIVE!"
    res.send(property);
});
