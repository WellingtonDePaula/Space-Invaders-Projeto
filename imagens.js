//variáveis
var naveAtora;
var inimigo1;
var wave1ImagemInimigos;
var wave2ImagemInimigos;
//código
function preload() {
    naveAtora = loadImage("imagens/suaNave.png");
    inimigo1 = loadImage("imagens/inimigo.png");
    wave1ImagemInimigos = [inimigo1, inimigo1, inimigo1, inimigo1];
    wave2ImagemInimigos = [inimigo1, inimigo1, inimigo1, inimigo1, inimigo1, inimigo1, inimigo1];
}