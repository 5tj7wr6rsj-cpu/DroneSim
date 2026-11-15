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


function drawDrone {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (const d of drones) {
        ctx.beginPath();
        let Start = worldToScreen(d.trail[0]);
        ctx.moveTo(Start.x, Start.y);

        for (let i = 1; i < d.trail.length; i++) {
            
        }
    }
}