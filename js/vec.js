function vec(x, y, z) {
    return{
        x: x, 
        y: y, 
        z: z
    }
}

function add(a, b) {
    return vec(
        a.x + b.x
        , a.y + b.y
        , a.z + b.z
    )
}

function subt(a, b) {
    return vec(
        a.x - b.x, 
        a.y - b.y, 
        a.z - b.z
    )
}

function scale(a, k) {
    return vec(
        k * a.x, 
        k * a.y, 
        k * a.z
    )
}

function dotP(a, b) {
    return(
        (a.x * b.x) + (a.y * b.y) + (a.z * b.z)
    )
}

function crossP(a, b) {
    return vec(
        (a.y * b.z) - (a.z * b.y),
        (a.z * b.x) - (a.x * b.z),
        (a.x * b.y) - (a.y * b.x)
    )
}

function mag(a) {
    return Math.sqrt(
        dotP(a, a)
    )
}

function unitV(a) {
    let m = mag(a);
    if (m === 0) {
        return vec(0, 0, 0)
    }
    else {
        return scale(a , 1 / m)
    }
}