//variáveis do inimigo
var xInimigo = [240,570, 900, 1230];
var yInimigo = [0, 0, 0, 0];
var yInimigoDesce = [150, 200, 250, 300];
var contagem = 4;
var podeIrParaDireita = true;
var podeIrParaEsquerda = false;
var larguraInimigo = 35;
var alturaInimigo = 35;
var velocidadeInimigo = 2;
var tickRate = 0;
var podeDescer = true;
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