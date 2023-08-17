//variáveis da tela
var alturaDaTela = innerHeight;
var larguraDaTela = innerWidth;
//código
function setup() {
    createCanvas(larguraDaTela, alturaDaTela);
  }
  function draw() {
    //cenário e processos de início
    background(15);
    desenhaCenario();
    criaTickRate();
    //buffs
    criaMiraLaser();
    horaDoLaserAparecer();
    criaLaserPegável();
    pegaLaser();
    //nave atora
    desenhaNave();
    movimentaNave();
    criaTiro();
    colisaoTiroInimigo();
    //naves inimigas
    criaNavesInimigas();
    movimentaInimigo();
    criaTiroInimigo();
    colisaoTiroInimigoComANave();
    }
  function desenhaCenario() {
    fill(30);
    noStroke();
    rect(200, 0, 1095, alturaDaTela);
  }