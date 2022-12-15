const usecase = require('../usecase/productImage.usecase');
module.exports = async (req, res, next) => {
    try{
        let result = await usecase.getImage(req.body.imageURL);
        console.log(result);
        res.status(200).send(result);
    }catch(err){
        const errorMessage = {
            errno:err.errno,
            message:"없음"
        }
        res.status(500).json(errorMessage);
    }

}