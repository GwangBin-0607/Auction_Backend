// @ts-check
const net = require('net');
const getProductCount = require('../Product/product.count.service');
class SocketStatus {
    /**
     * 
     * @param {net.Socket} socket 
     */
    constructor(socket) {
        this.statusNumber = 0;
        this.socket = socket;
        this.showProductOnePage = 15;
    }

    /**
     * @param {number} statusNumber 
     */
    initStatusWhenConnected(statusNumber){
        this.statusNumber = statusNumber;
    }
    /**
     * @throws Will Throw an error not updated
     */
    async updateStatus() {
        try{
            let count = await getProductCount.getList()
            if (count / this.showProductOnePage > this.statusNumber) {
                this.statusNumber += 1
            }else{
                throw Error("current status is up to date")
            }
        }catch(e){
            throw Error("SQL Error")
        }
    }
}
exports.SocketStatus = SocketStatus;