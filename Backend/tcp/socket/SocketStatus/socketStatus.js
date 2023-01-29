// @ts-check
const net = require('net');
const getProductCount = require('../../DAO/product.count.service');
class SocketStatus {
    /**
     * 
     * @param {net.Socket} socket 
     */
    constructor(socket) {
        this.statusNumber = 0;
        this.socket = socket;
        this.showProductByPage = 15;
    }
    /**
     * @param {number} statusNumber
     * @throws Will Throw an error not updated
     * @async
     * @returns {Promise<Boolean>}
     */
    async updateStatus(statusNumber) {
        try{
            let updateStatusNumber = statusNumber+1
            let count = await getProductCount.getList()
            if (count / this.showProductByPage >= updateStatusNumber) {
                this.statusNumber = updateStatusNumber;
                return true
            }else{
                this.statusNumber = statusNumber;
                return false
            }
        }catch(e){
            throw Error("SQL Error")
        }
    }
}
exports.SocketStatus = SocketStatus;