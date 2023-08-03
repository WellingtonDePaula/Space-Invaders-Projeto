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
    movimentaNave();
    criaNavesInimigas();
    criaTiro();
    movimentaInimigo();
    colisaoTiroInimigo();
  }

  function desenhaCenario() {
    fill(30);
    rect(200, 0, 1095, alturaDaTela);
  }