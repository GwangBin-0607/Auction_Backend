
//@ts-check
const net = require('net');
const {DTO_SocketStatus} = require('../DTO/DTO_SocketStatus');
const {DTO_RequestUpdateSocketStatus} = require('../DTO/DTO_RequestUpdateSocketStatus');
const {Product_DAO} = require('../DAO/Product/index');
class SocketStatusService{
    constructor(){
        /** @type {Array<DTO_SocketStatus>} */
        this.sockets = []
        this.showProductByPage = 15;
        this.productDao = new Product_DAO()
    }
    /**
     * 
     * @param {net.Socket} socket 
     */
    registerSocket(socket){
        let returnSocket = new DTO_SocketStatus(socket);
        this.sockets.push(returnSocket);
    }
    /**
     * @returns {Array<DTO_SocketStatus>}
     */
    allSockets(){
        return this.sockets;
    }
    /**
     * @param {net.Socket} socket 
     * @param {DTO_RequestUpdateSocketStatus}  request
     * @returns {Promise<Boolean>}
     * @throws
     */
     async updateSocketStatus(socket,request){
        for(let i=0;i<this.sockets.length;i++){
            if (this.sockets[i].socket == socket){
                let result = await this.updateStatus(this.sockets[i],request.stateNumber);
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