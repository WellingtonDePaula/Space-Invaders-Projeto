var xInimigo = 550;
var yInimigo = 0;
var larguraInimigo = 35;
var alturaInimigo = 35;
function criaNavesInimigas() {
    image(inimigo1, xInimigo, yInimigo, larguraInimigo, alturaInimigo);
}
function movimentaInimigo() {
    if(yInimigo !== 300) {
        yInimigo += 2;
    }
}