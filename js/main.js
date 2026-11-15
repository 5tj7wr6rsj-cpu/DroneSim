const DT = 1 / 120;      
let timeScale = 1;   
let running = true;   
let accumulator = 0;  
let lastTime = null;  
let simTime = 0;   
let drones = [];     

const scenario = {
    drones: [
        { name: "Target", colour: "red", pos: vec(-300, 100, 0), vel: vec(50, 0, 0) },
        { name: "Interceptor", colour: "blue", pos: vec(-300, -200, 0), vel: vec(60, 40, 0) }
    ]
};