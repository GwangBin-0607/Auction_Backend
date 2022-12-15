const fs = require('fs').promises;

exports.getImage = async (imageURL) => {
    var file = fs.readFile(imageURL).then((data)=>{
        return data;
    }).catch((err) => {
        console.log(err);
    });
    return file
}