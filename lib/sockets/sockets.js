import { blink, turnOff, turnOn } from "../handlers/commands.handler.js";
import { io } from "../server.js";

const sockets = (socket) => {

    // Her lytter vi på en besked fra klienten
    socket.on('blink', (data) => {
        blink(data.delay);
    });

    socket.on('turnOff', (data) => {
        turnOff()
    });
  
    socket.on('turnOn', (data) => {
        turnOn()

        io.emit('lightsOn');

    });
}

export default sockets;