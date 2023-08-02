var xNave = 697.5;
var yNave = 620;
var velocidadeXNave = 6;
var tiroChamado = false;
var velocidadeTiro = 25;
var xTiro;
var yTiro = yNave-50;
var tiroSaiuDaNave = false;
var podeAtirar = true;

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
function keyTyped() {
    if(podeAtirar === true) {
        if(key === "z") {
            tiroChamado = true; tiroSaiuDaNave = true; podeAtirar = false;
        }
    }
    return false;
}
function criaTiro() {
    if(tiroSaiuDaNave === true) {
        xTiro = xNave+17; tiroSaiuDaNave = false;
    }
    if(tiroChamado === true) {
        fill(255);
        rect(xTiro, yTiro, 15, 35);
        yTiro -= velocidadeTiro;
    }
    if(yTiro <= -50) {
        yTiro = yNave-50; tiroChamado = false; podeAtirar = true;
    }
}
