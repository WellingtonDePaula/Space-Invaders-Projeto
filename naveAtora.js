//Variáveis da nave
var xNave = 697.5;
var yNave = 620;
var velocidadeXNave = 5;
//variáveis do tiro
var tiroChamado = false;
var velocidadeTiro = 25;
var xTiro;
var yTiro = yNave-50;
var larguraDoTiro = 10;
var alturaDoTiro = 35;
var tiroSaiuDaNave = false;
var podeAtirar = true;
//colisão
var colidiu = false;
//código
function desenhaNave() {
    image(naveAtora, xNave, yNave, 80, 80);
}
function movimentaNave() {
    if(keyIsDown(LEFT_ARROW)) {
        if(podeSeMoverX1()) {
            xNave -= velocidadeXNave;
        }
    }
    if(keyIsDown(RIGHT_ARROW)) {
        if(podeSeMoverX2()) {
            xNave += velocidadeXNave;
        }
    }
}
function criaTiro() {
    if(tiroSaiuDaNave === true) {
        xTiro = xNave+35; tiroSaiuDaNave = false; yTiro = 570;
    }
    if(tiroChamado === true) {
        fill(31, 159, 227);
        strokeWeight(2.5);
        stroke(0);
        rect(xTiro, yTiro, larguraDoTiro, alturaDoTiro);
        yTiro -= velocidadeTiro;
    }
    if(yTiro <= -50) {
        yTiro = yNave-50; tiroChamado = false; podeAtirar = true;
    }
}
function podeSeMoverX1() {
    return xNave >= 215;
}
function podeSeMoverX2() {
    return xNave <= 1231;
}
function colisaoTiroInimigo() {
    if(xInimigo + larguraInimigo > xTiro && xInimigo < xTiro + larguraDoTiro && yInimigo + alturaInimigo-2 > yTiro) {
        xInimigo = 2000; colidiu = true;
    }
    if(colidiu === true) {
        yTiro = 570; colidiu = false; podeAtirar = true; tiroChamado = false;
    }
}