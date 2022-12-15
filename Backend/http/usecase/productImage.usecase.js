const fs = require('fs').promises;

async function returnImage(imageURL){
    var file = fs.readFile(imageURL).then((data)=>{
        return data;
    }).catch((err) => {
        throw err;
    });
    return file
}
exports.getImage = returnImage