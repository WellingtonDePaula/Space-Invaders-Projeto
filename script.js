var alturaDaTela = innerHeight;
var larguraDaTela = innerWidth;
function setup() {
    createCanvas(larguraDaTela, alturaDaTela);
  }
  
  function draw() {
    background(15);
    desenhaCenario();
    desenhaNave();
    movimentaNave();
    criaTiro();
    print(tiroChamado, tiroSaiuDaNave)
  }

  function desenhaCenario() {
    fill(30);
    rect(200, 0, 1095, alturaDaTela);
  }