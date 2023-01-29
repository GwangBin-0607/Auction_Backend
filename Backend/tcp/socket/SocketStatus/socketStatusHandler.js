//@ts-check
const net = require('net');
const socketStatus = require('./socketStatus');
class SocketStatusHandler{
    constructor(){
        /** @type {Array<socketStatus.SocketStatus>} */
        this.sockets = []
    }
    /**
     * 
     * @param {net.Socket} socket 
     */
    registerSocket(socket){
        let returnSocket = new socketStatus.SocketStatus(socket);
        this.sockets.push(returnSocket);
    }
    /**
     * @returns {Array<socketStatus.SocketStatus>}
     */
    allSockets(){
        return this.sockets;
    }
    /**
     * @param {net.Socket} socket 
     * @param {number}  statusNumber
     * @returns {Promise<Boolean>}
     * @throws
     */
     async updateSocketStatus(socket,statusNumber){
        for(let i=0;i<this.sockets.length;i++){
            if (this.sockets[i].socket == socket){
                let result = await this.sockets[i].updateStatus(statusNumber);
                return result
            }
        }
        throw Error('Not Update Socket Status');
    }
}
exports.SocketType = socketStatus.SocketStatus
exports.handler = SocketStatusHandler;