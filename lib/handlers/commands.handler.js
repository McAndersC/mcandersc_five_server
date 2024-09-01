import arduino from "../arduino/arduino.js";

const devices = arduino.devices;

// Her tænder vi vores lys.
export const turnOn = async () => {

  if(devices.testled) {

    devices.testled.stop(); 
    devices.testled.on(); 

  }

  return true;

};

// Her slukker vi vores lys.
export const turnOff = async () => {

    if(devices.testled) {

      devices.testled.stop(); 
      devices.testled.off(); 

    }
  
    return true;

};

// Her tænder vi vores blink.
export const blink = async (delay = 1000) => {

    if(devices.testled) {

      devices.testled.blink(delay); 

    }
  
    return true;

};

// Her tænder vi vores blink.
export const blinkThenStop = async (delay = 1000, timeout=5000) => {

    if(devices.testled) {

      devices.testled.blink(delay); 

    }

    setTimeout(() => {
      devices.testled.stop();
    }, timeout);
  
    return true;

};