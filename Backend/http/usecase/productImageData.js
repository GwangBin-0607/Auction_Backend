const fs = require('fs');
const path = require('path');
const mime = require('mime');
module.exports = async (req, res) => {
    var appRoot = process.env.PWD;
    var come = path.resolve(appRoot, "../", "images", "nike1.png");
    console.log(appRoot);
    console.log(come);
    fs.readFile(come, function (error, data) {
        if (error) {
            res.json(error);
        } else {
            res.end(data);
        }
    });
}