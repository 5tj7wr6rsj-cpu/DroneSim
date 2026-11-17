const canvas = document.getElementById("Canvas");
const ctx = canvas.getContext("2d");

let originX = canvas.width / 2;
let originY = canvas.height / 2;
let pxPerUnit = 1;

function worldToScreen(p) {
    return {
        x: originX + (p.x * pxPerUnit),
        y: originY - (p.y * pxPerUnit)
    }
}

function drawDrone(drones) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (const d of drones) {
        ctx.beginPath();
        let start = worldToScreen(d.trail[0]);
        ctx.moveTo(start.x, start.y);

        for (let i = 1; i < d.trail.length; i++) {
            let pos = worldToScreen(d.trail[i]);
            ctx.lineTo(pos.x, pos.y);
        }

        let now = worldToScreen(d.pos);
        ctx.lineTo(now.x, now.y);

        ctx.strokeStyle = d.colour;
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(now.x, now.y, 6, 0, 2 * Math.PI);

        ctx.fillStyle = d.colour;
        ctx.fill();

        ctx.fillText(d.name, now.x + 10, now.y - 10);
    }
}

function drawHUD(time, dist, minDist, tmin) {
    ctx.fillStyle = "black";
    ctx.font = "16px sans-serif";

    ctx.fillText("t= " + time.toFixed(2) + "s", 10, 20);
    ctx.fillText("dist= " + dist.toFixed(2) + "m", 10, 40);
    ctx.fillText("closest= " + minDist.toFixed(2) + "m at t=" + tmin.toFixed(2) + "s", 10, 60);
}

