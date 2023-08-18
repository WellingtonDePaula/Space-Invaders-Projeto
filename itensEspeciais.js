//variáveis do laser
var xLaserPowerUp = 711;
var yLaserPowerUp = -200;
var larguraLaserPowerUp = 50;
var alturaLaserPowerUp = 50;
var wave1InimigosMortos = false;
var imagemLaserAparece = false;
var laserPego = false;
var laserAtivo = false;
//código
function horaDoLaserAparecer() {
    print(imagemLaserAparece);
    if(wave1InimigoVivo[0] === false && wave1InimigoVivo[1] === false && wave1InimigoVivo[2] === false && wave1InimigoVivo[3] === false && laserPego === false) {
        wave1InimigosMortos = true;
    }
    if(wave1InimigosMortos === true && jogadorPerdeu === false) {
        imagemLaserAparece = true;
        wave1InimigosMortos = false;
    }
}
function criaLaserPegável() {
    if(imagemLaserAparece === true) {
        image(laserImagem, xLaserPowerUp, yLaserPowerUp, larguraLaserPowerUp, alturaLaserPowerUp);
        if(yLaserPowerUp <= yNave + 10) {
            yLaserPowerUp += 3;
        }
    }
}
function pegaLaser() {
    if(xNave + larguraNave >= xLaserPowerUp && xNave - larguraNave <= xLaserPowerUp && yNave - alturaNave <= yLaserPowerUp) {
        laserPego = true;
        imagemLaserAparece = false;
    }
}
function criaMiraLaser() {
    if(laserAtivo === true && naveViva === true) {
        stroke(255, 12, 12);
        strokeWeight(1);
        line(xNave + 36, yNave, xNave + 40, 0);
    }
}