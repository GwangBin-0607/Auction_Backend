// @ts-check
class RandomProduct{
    /**
     * 
     * @param {number} limit 
     */
    constructor(limit){
        this.limit = limit;
    }
    /**
     * 
     * @param {number} min 
     * @param {number} max 
     * @returns {number}
     */
    getRandomInt(min,max){
        return Math.floor(Math.random()*(max-min))+min;
    }
    /**
     * @param {Array<number>} allProductId
     * @returns {Array<number>}
     */
    randomProductIdList(allProductId,allProductListCount){
        let productListArray = allProductId;
        let randomIndex = this.getRandomIndex(allProductListCount);
        let resultRandomProductId = new Array();
        for(let i=0;i<randomIndex.length;i++){
            let productId = randomIndex[i]
            resultRandomProductId.push(productListArray[productId]);
        }
        return resultRandomProductId
    }
    /**
     * @param {number} allProductListCount
     * @returns {Array<number>}
     */
     getRandomIndex(allProductListCount){
        let productListCount = allProductListCount;
        let setValue = new Set()
        let randomCount = this.getRandomInt(1,this.limit)
        for(let i=0;i<randomCount;i++){
            let randomNumber = this.getRandomInt(0,10)
            // let randomNumber = this.getRandomInt(0,productListCount)
            setValue.add(randomNumber)
        }
        return Array.from(setValue)
    }

}
exports.RandomProduct = RandomProduct;