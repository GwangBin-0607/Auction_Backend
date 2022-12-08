const db=require('../../Database/models/index');
  const list = async ()=>{
    const result = await db.products.findAll({
        raw:true,
        plain:true
    }).catch((err) => console.log(err));
    console.log(result);
    return result
  }
exports.users = async (req, res, next) => {
    var result = await list()
    res.send(result);
}