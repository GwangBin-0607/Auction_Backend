//@ts-check
const usecase = require('../services/product.image.service');

module.exports =  async (req, res, next) => {
    try{
        let result = await usecase.getImage(req.body.imageURL);
        console.log(result);
        res.status(200).send(result);
    }catch(err){
        console.log(err);
        res.status(201).end();
    }

}