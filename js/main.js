const DT = 1 / 120;      
let timeScale = 1;   
let running = false;   
let accumulator = 0;  
let lastTime = null;  
let simTime = 0;   
let drones = [];     

const play = document.getElementById("playBtn");
const reset = document.getElementById("resetBtn");

const scenario = {
    drones: [
        { name: "Target", colour: "red", pos: vec(-300, 100, 0), vel: vec(50, 0, 0) },
        { name: "Interceptor", colour: "blue", pos: vec(-300, -200, 0), vel: vec(60, 40, 0) }
    ]
};

function loadScenario(s) {
    drones = [];
    for (const entry of s.drones) {
        let newDrone = new Drone(entry.name, entry.colour, entry.pos, entry.vel);
        drones.push(newDrone);
    }
    simTime = 0;
    accumulator = 0;
}

function step(dt) {
    for (const d of drones) {
        d.update(dt);
    }
    simTime += dt;
}

play.addEventListener("click", function () {
    running = !running;
    if (running === true) {
        play.textContent = "Pause";
    }
    else {
        play.textContent = "Play";
    }
});

reset.addEventListener("click", function () {
    loadScenario(scenario);
});

function loop(now) {
    if (lastTime === null) {
        lastTime = now;
    }

    let frameTime = (now - lastTime) / 1000;
    lastTime = now;
    frameTime = Math.min(frameTime, 0.1);

    if (running) {
        accumulator += frameTime * timeScale;
        while (accumulator >= DT) {
            step(DT);
            accumulator -= DT;
        }
    }

    drawDrone(drones);
    requestAnimationFrame(loop);
}

loadScenario(scenario);
requestAnimationFrame(loop);