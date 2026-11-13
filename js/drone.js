class Drone {
    constructor(name, colour, pos, vel) {
        this.name = name;
        this.colour = colour;
        this.pos = pos;
        this.vel = vel;
        this.trail = [pos];
        this.stepCount = 0;
    }
    update(dt) {
        this.pos = add(this.pos, scale(this.vel, dt));
        this.stepCount++;
        if (this.stepCount % 10 === 0) {
            this.trail.push(this.pos);
        }
    }
}