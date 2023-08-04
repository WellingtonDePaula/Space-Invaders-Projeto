//variáveis do inimigo
var xInimigo = [240,570, 900, 1230];
var yInimigo = [0, 0, 0, 0];
var xInimigoMaximo = [270, 600, 930, 1260];
var xInimigoMinimo = [210, 540, 870, 1200];
var yInimigoDesce = 150;
var podeIrParaDireita = true;
var podeIrParaEsquerda = false;
var larguraInimigo = 35;
var alturaInimigo = 35;
//código
function criaNavesInimigas() {
    for(let i = 0; i < imagemInimigos.length; i ++)
    image(imagemInimigos[i], xInimigo[i], yInimigo[i], larguraInimigo, alturaInimigo);
}
function movimentaInimigo() {
    for(let i = 0; i < imagemInimigos.length; i ++) {
        if(yInimigo[i] !== yInimigoDesce) {
            yInimigo[i] += 2;
        }
        if(yInimigo[i] === yInimigoDesce && podeIrParaDireita === true) {
            xInimigo[i] += 1;
        }
        if(xInimigo[i] === xInimigoMaximo[i]) {
            podeIrParaDireita = false; podeIrParaEsquerda = true;
        }
        if(yInimigo[i] === yInimigoDesce && podeIrParaEsquerda === true) {
            xInimigo[i] -= 1;
        }
        if(xInimigo[i] === xInimigoMinimo[i]) {
        podeIrParaEsquerda = false; podeIrParaDireita = true;
        }
    }
}