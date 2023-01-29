
//@ts-check
const net = require('net');
const {SocketStatus} = require('../Dto/SocketStatus');
const {SocketStatusUpdate} = require('../Dto/SocketStatusUpdate');
const {Product_DAO} = require('../Dao/Product/index');
class SocketStatusService{
    constructor(){
        /** @type {Array<SocketStatus>} */
        this.sockets = []
        this.showProductByPage = 15;
        this.productDao = new Product_DAO()
    }
    /**
     * 
     * @param {net.Socket} socket 
     */
    registerSocket(socket){
        let returnSocket = new SocketStatus(socket);
        this.sockets.push(returnSocket);
    }
    /**
     * @returns {Array<SocketStatus>}
     */
    allSockets(){
        return this.sockets;
    }
    /**
     * @param {net.Socket} socket 
     * @param {SocketStatusUpdate}  statusNumber
     * @returns {Promise<Boolean>}
     * @throws
     */
     async updateSocketStatus(socket,statusNumber){
        for(let i=0;i<this.sockets.length;i++){
            if (this.sockets[i].socket == socket){
                let result = await this.updateStatus(this.sockets[i],statusNumber.stateNumber);
                return result
            }
        }
        throw Error('Not Update Socket Status');
    }
    /**
     * @param {SocketStatus} socket 
     * @param {number}  statusNumber
     * @returns {Promise<Boolean>}
     * @throws
     */
    async updateStatus(socket,statusNumber) {
        try{
            let updateStatusNumber = statusNumber+1
            let count = await this.productDao.allProductCount();
            if (count / this.showProductByPage >= updateStatusNumber) {
                socket.statusNumber = updateStatusNumber;
                return true
            }else{
                socket.statusNumber = statusNumber;
                return false
            }
        }catch(e){
            throw Error("SQL Error")
        }
    }
}
exports.SocketStatusService = SocketStatusService;