function catAndMouse(x, y, z) {
    let result = {x: 'Cat A', y: 'Cat B', z: 'Mouse C' };
    let [dX, dY] = [0, 0];
    if (x > z) {
        dX = x - z;
    } else {
        dX = z - x;
    }

    if (y > z) {
        dY = y - z;
    } else {
        dY = z - y;
    }

    if (dX === dY) {
        return result.z;
    }

    if (dX > dY) {
        return result.y;
    } else {
        return result.x;
    }
}

module.exports = { catAndMouse };