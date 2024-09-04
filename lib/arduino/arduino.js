import five from 'johnny-five';


const arduino = {}

arduino.devices = {
    testled: null
};

arduino.init = () => {

    let board = new five.Board({port : process.env.ARDUINO_PORT});

    const setup = () => {
     
        arduino.devices.testled = new five.Led(9);
        arduino.devices.redLed = new five.Led(10);

    }


    board.on("ready", () => {

        setup();
 
    });

}

export default arduino;