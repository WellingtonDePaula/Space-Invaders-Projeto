//variáveis do laser
var laserAtivo = false;
//código
function criaMiraLaser() {
    if(laserAtivo === true && naveViva === true) {
        stroke(255, 12, 12);
        strokeWeight(1);
        line(xNave + 40, yNave, xNave + 40, 0);
    }
}