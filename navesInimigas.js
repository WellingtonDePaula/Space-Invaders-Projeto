//variáveis do inimigo
var xInimigo = [240, 570, 900, 1230];
var yInimigo = [0, 0, 0, 0];
var yInimigoDesce = [150, 150, 150, 150];
var podeIrParaDireita = true;
var podeIrParaEsquerda = false;
var larguraInimigo = 35;
var alturaInimigo = 35;
var velocidadeInimigo = 2;
var tickRate = 0;
var podeDescer = true;
//variáveis do tiro inimigo
var xTiroInimigo = [];
var yTiroInimigo = [];
var tiroInimigoChamado = false;
//código
function criaTickRate() {
    tickRate += 0.5;
    if(tickRate === 60.5) {
        tickRate = 0; 
    }
    if(tickRate === 15) {
        podeIrParaDireita = true; podeIrParaEsquerda = false;
    }
    if(tickRate === 45) {
        podeIrParaDireita = true; podeIrParaEsquerda = false;
    }
    if(tickRate === 0) {
        podeIrParaDireita = false; podeIrParaEsquerda = true;
    }
    if(tickRate === 30) {
        podeIrParaDireita = false; podeIrParaEsquerda = true;
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
    for(let i = 0; i < imagemInimigos.length; i ++) {
        print(tiroInimigoChamado)
        if(tickRate === 0 && yInimigo[i] === 150) {
            tiroInimigoChamado = true;
            xTiroInimigo[i] = xInimigo[i];
            yTiroInimigo[i] = yInimigo[i];
        }
        if(tiroInimigoChamado === true) {
            yTiroInimigo[i] += velocidadeTiro;
            fill(255, 0, 0);
            strokeWeight(1.5);
            stroke(0);
            rect(xTiroInimigo[i] + 5, yTiroInimigo[i] + 20, larguraDoTiro, alturaDoTiro);
        }
        if(yTiroInimigo[i] > alturaDaTela) {
            tiroInimigoChamado = false;
        }
    }
}