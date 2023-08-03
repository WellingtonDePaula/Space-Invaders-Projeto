var laserAtivo = false;
function criaMiraLaser() {
    if(laserAtivo === true) {
        stroke(255, 12, 12);
        strokeWeight(1);
        line(xNave + 40, yNave, xNave + 40, 0);
    }
}