const path = require('path');
var appRoot = process.env.PWD;
var resolveUsecasePath = path.resolve(appRoot, "usecase");
const resolveDatabaseModels = path.resolve(appRoot,"Database","models");


module.exports.config = function () {
    console.log("Test Config")
    global.usecasePath = resolveUsecasePath
    global.databaseModelsPath = resolveDatabaseModels
}