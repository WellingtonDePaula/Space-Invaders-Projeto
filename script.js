//variáveis da tela
var alturaDaTela = innerHeight;
var larguraDaTela = innerWidth;
//código
function setup() {
    createCanvas(larguraDaTela, alturaDaTela);
  }
  function draw() {
    background(15);
    desenhaCenario();
    desenhaNave();
    criaMiraLaser();
    movimentaNave();
    criaNavesInimigas();
    criaTiroInimigo();
    movimentaInimigo();
    colisaoTiroInimigo();
    criaTickRate();
  }
  function desenhaCenario() {
    fill(30);
    noStroke();
    rect(200, 0, 1095, alturaDaTela);
  }