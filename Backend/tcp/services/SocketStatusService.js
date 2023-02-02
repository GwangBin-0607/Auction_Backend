
//@ts-check
const net = require('net');
const { DTO_SocketStatus } = require('../DTO/DTO_SocketStatus');
const { DTO_RequestUpdateSocketStatus } = require('../DTO/DTO_RequestUpdateSocketStatus');
const { Product_DAO } = require('../DAO/Product/index');
class SocketStatusService {
    constructor() {
        /** @type {Array<DTO_SocketStatus>} */
        this.sockets = []
        this.showProductByPage = 15;
        this.productDao = new Product_DAO()
    }
    /**
     * 
     * @param {net.Socket} socket 
     */
    registerSocket(socket) {
        let returnSocket = new DTO_SocketStatus(socket);
        this.sockets.push(returnSocket);
    }
    /**
     * 
     * @param {net.Socket} socket 
     */
    removeSocket(socket) {
        const socketStatus = this.sockets.find(each => { return each.socket === socket })
        if (socketStatus != undefined) {
            const idx = this.sockets.indexOf(socketStatus)
            if (idx > -1) this.sockets.splice(idx, 1)
        }
    }
    /**
     * @returns {Array<DTO_SocketStatus>}
     */
    allSockets() {
        return this.sockets;
    }
    /**
     * @param {net.Socket} socket 
     * @param {DTO_RequestUpdateSocketStatus}  request
     * @returns {Promise<Boolean>}
     * @throws
     */
    async updateSocketStatus(socket, request) {
        for (let i = 0; i < this.sockets.length; i++) {
            if (this.sockets[i].socket == socket) {
                let result = await this.updateStatus(this.sockets[i], request.stateNumber);
                return result
            }
        }
        throw Error('Not Update Socket Status');
    }
    /**
     * @param {DTO_SocketStatus} socket 
     * @param {number}  statusNumber
     * @returns {Promise<Boolean>}
     * @throws
     * @private
     */
    async updateStatus(socket, statusNumber) {
        try {
            let count = await this.productDao.allProductCount();
            if (count / this.showProductByPage > statusNumber) {
                socket.statusNumber = statusNumber+1;
                return true
            } else {
                socket.statusNumber = statusNumber;
                return false
            }
        } catch (e) {
            throw Error("SQL Error")
        }
    }
    /**
     * 
     * @param {number} product_id
     * @returns {Promise<Array<DTO_SocketStatus>>}
     */
    async checkRangeProductWithSocketState(product_id) {
        const allProduct_id = (await this.productDao.allProductId()).map(each=>each.product_id);
        const index = allProduct_id.indexOf(product_id)+1;
        const group = Math.ceil(index / this.showProductByPage);
        console.log(group);
        /** @type {Array<DTO_SocketStatus>} */
        let resultSocketStatus = []
        for (let socketStatus of this.sockets) {
            if (socketStatus.statusNumber >= group) {
                resultSocketStatus.push(socketStatus);
            }
        }
        return resultSocketStatus;
    }
    /**
     * 
     * @returns {Boolean}
     */
    test_isEnableStreaming(){
        if(this.sockets.length >= 2){
            return true
        }else{
            return false
        }
    }
}
exports.SocketStatusService = SocketStatusService;
exports.test_Singleton = new SocketStatusService();