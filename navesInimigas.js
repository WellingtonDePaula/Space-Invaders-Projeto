//variáveis do inimigo
var xInimigo = [240, 570, 900, 1230];
var yInimigo = [0, 0, 0, 0];
var xInimigoMaximo = [270, 600, 930, 1260];
var xInimigoMinimo = [210, 540, 870, 1200];
var yInimigoDesce = 150;
var podeIrParaDireita = true;
var podeIrParaEsquerda = false;
var larguraInimigo = 35;
var alturaInimigo = 35;
var velocidadeInimigo = 2;
var tickRate = 0;
var inimigoVivo = [true, true, true, true];
//variáveis do tiro inimigo
var xTiroInimigo = [];
var yTiroInimigo = [];
var tiroInimigoChamado = false;
//código
function criaTickRate() {
    tickRate += 0.5;
    if(tickRate > 60) {
        tickRate = 0; 
    }
}
function criaNavesInimigas() {
    for(let i = 0; i < imagemInimigos.length; i ++){
        if(inimigoVivo[i] === true) {
        image(imagemInimigos[i], xInimigo[i], yInimigo[i], larguraInimigo, alturaInimigo);
        }
    }
}
function movimentaInimigo() {
    for(let i = 0; i < imagemInimigos.length; i ++) {
        if(yInimigo[i] !== yInimigoDesce) {
            yInimigo[i] += velocidadeInimigo;
        }
        if(xInimigo[i] === xInimigoMaximo[i] && inimigoVivo[i] === true) {
            podeIrParaDireita = false;
            podeIrParaEsquerda = true;
        }
        if(xInimigo[i] === xInimigoMinimo[i] && inimigoVivo[i] === true) {
            podeIrParaEsquerda = false;
            podeIrParaDireita = true
        }
        if(podeIrParaDireita === true && yInimigo[i] === yInimigoDesce) {
            xInimigo[i] += velocidadeInimigo;
        }
        if(podeIrParaEsquerda === true && yInimigo[i] === yInimigoDesce) {
            xInimigo[i] -= velocidadeInimigo;
        }
    }
}
function criaTiroInimigo() {
    for(let i = 0; i < imagemInimigos.length; i ++) {
        if(tickRate === 20 && yInimigo[i] === 150) {
            tiroInimigoChamado = true;
            xTiroInimigo[i] = xInimigo[i];
            yTiroInimigo[i] = yInimigo[i];
        }
        if(tiroInimigoChamado === true && inimigoVivo[i] === true) {
            yTiroInimigo[i] += velocidadeTiro;
            fill(255, 0, 0);
            strokeWeight(1.5);
            stroke(0);
            rect(xTiroInimigo[i] + 13, yTiroInimigo[i] + 20, larguraDoTiro, alturaDoTiro);
        }
        if(yTiroInimigo[i] > alturaDaTela) {
            tiroInimigoChamado = false;
        }
    }
}