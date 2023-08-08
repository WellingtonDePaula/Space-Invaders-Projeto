//variáveis do inimigo
var xInimigo = [240, 570, 900, 1230];
var yInimigo = [0, 0, 0, 0];
var yInimigoDesce = [150, 150, 150, 150];
var contagem = 4;
var podeIrParaDireita = true;
var podeIrParaEsquerda = false;
var larguraInimigo = 35;
var alturaInimigo = 35;
var velocidadeInimigo = 2;
var tickRate = 0;
var podeDescer = true;
//variáveis do tiro inimigo
var xTiroInimigo;
var yTiroInimigo;
var tiroInimigoChamado = true;
//código
function criaTickRate() {
    tickRate += 0.5;
    if(tickRate === 30) {
        tickRate = 0; 
    }
    if(tickRate === 15) {
        podeIrParaDireita = true; podeIrParaEsquerda = false;
    } else {
        if(tickRate === 0) {
            podeIrParaDireita = false; podeIrParaEsquerda = true;
        }
    }
}
function criaNavesInimigas() {
    for(let i = 0; i < imagemInimigos.length; i ++)
    image(imagemInimigos[i], xInimigo[i], yInimigo[i], larguraInimigo, alturaInimigo);
}
function movimentaInimigo() {
    for(let i = 0; i < imagemInimigos.length; i ++) {
        if(yInimigo[i] !== yInimigoDesce[i] && podeDescer === true) {
            yInimigo[i] += velocidadeInimigo;
        }
        if(yInimigo[i] === yInimigoDesce[i] && podeIrParaDireita === true) {
            xInimigo[i] += velocidadeInimigo;
        }
        if(yInimigo[i] === yInimigoDesce[i] && podeIrParaEsquerda === true) {
            xInimigo[i] -= velocidadeInimigo;
        }
        if(yInimigo[i] === yInimigoDesce[i] && tickRate === 0) {
            podeDescer = false;
        }
    }
}
function criaTiroInimigo() {
    xTiroInimigo = xInimigo[0, 1, 2, 3];
    yTiroInimigo = yInimigo[0, 1, 2, 3];
    //for(let i = 0; i < xTiroInimigo.length; i ++) {
        if(tiroInimigoChamado === true) {
            fill(255);
            strokeWeight(2.5);
            stroke(0);
            rect(xTiroInimigo[0], yTiroInimigo[0], larguraDoTiro, alturaDoTiro);
            rect(xTiroInimigo[1], yTiroInimigo[1], larguraDoTiro, alturaDoTiro);
        }
    //}
}