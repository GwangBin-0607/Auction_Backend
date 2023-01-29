// @ts-check
const net = require('net');
class SocketStatus {
    /**
     * @param {net.Socket} socket 
     */
    constructor(socket) {
        this.statusNumber = 0;
        this.socket = socket;
    }
}
exports.SocketStatus = SocketStatus;