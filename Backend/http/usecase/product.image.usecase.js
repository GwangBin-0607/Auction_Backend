const fs = require('fs').promises;

async function returnImage(imageURL){
    var file = fs.readFile(imageURL)
    return file
}
exports.getImage = returnImage