var xNave = 697.5;
var yNave = 620;
var velocidadeXNave = 6;
var tiroChamado = false;
var velocidadeTiro = 25;
var xTiro = xNave+17
var yTiro = yNave-50
var tiroSaiuDaNave = false;

function desenhaNave() {
    fill(0);
    rect(xNave, yNave, 50, 80);
}

function movimentaNave() {
    if(keyIsDown(LEFT_ARROW)) {
        xNave -= velocidadeXNave;
    }
    if(keyIsDown(RIGHT_ARROW)) {
        xNave += velocidadeXNave;
    }
}

function criaTiro() {
    if(tiroChamado === true) {
        fill(255);
        rect(xTiro[i], yTiro[i], 15, 35);
        yTiro[i] -= velocidadeTiro;
        tiroSaiuDaNave = true;
    }
    if(yTiro[i] <= -50) {
        yTiro[i] = yNave-50; tiroChamado = false;
    }
}
function verificaSeOTiroSaiuDaTela() {
    if(tiroSaiuDaNave === true) {
        xTiro[0] = xNave+17;
    }
}

function keyTyped() {
    if(key === "z") {
        tiroChamado = true;
    }
}