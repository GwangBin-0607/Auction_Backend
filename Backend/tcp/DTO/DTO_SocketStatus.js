// @ts-check
const net = require('net');
class DTO_SocketStatus {
    /**
     * @param {net.Socket} socket 
     */
    constructor(socket) {
        this.statusNumber = 0;
        this.socket = socket;
    }
}
exports.DTO_SocketStatus = DTO_SocketStatus;