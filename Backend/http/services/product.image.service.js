const fs = require('fs').promises;

async function returnImage(imageURL){
    var file = await fs.readFile(imageURL)
    return file
}
exports.getImage = returnImage