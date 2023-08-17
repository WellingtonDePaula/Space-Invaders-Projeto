//variáveis do inimigo wave 1
var wave1XInimigo = [240, 570, 900, 1230];
var wave1YInimigo = [0, 0, 0, 0];
var wave1XInimigoMaximo = [270, 600, 930, 1260];
var wave1XInimigoMinimo = [210, 540, 870, 1200];
var wave1YInimigoDesce = 150;
var podeIrParaDireita = true;
var podeIrParaEsquerda = false;
var larguraInimigo = 35;
var alturaInimigo = 35;
var velocidadeInimigo = 2;
var tickRate = 0;
var wave1InimigoVivo = [true, true, true, true];
//variáveis do inimigo wave 2
var wave2XInimigo = [240, 400, 570, 730, 900, 1070, 1230];
var wave2YInimigo = [-250, -250, -250, -250, -250, -250, -250];
var wave2XInimigoMaximo = [270, 430, 600, 760, 930, 1200, 1260];
var wave2XInimigoMinimo = [210, 370, 540, 700, 870, 1140, 1200];
var wave2YInimigoDesce = 150;
var wave2InimigoVivo = [true, true, true, true, true, true, true];
//variáveis do tiro inimigo wave 1
var wave1XTiroInimigo = [];
var wave1YTiroInimigo = [];
var wave1TiroInimigoChamado = false;
var wave1TiroPodeExistir = [true, true, true, true];
//variáveis do tiro inimigo wave 2
var wave2XTiroInimigo = [];
var wave2YTiroInimigo = [];
var wave2TiroInimigoChamado = false;
var wave2TiroPodeExistir = [true, true, true, true];
//variáveis do gameOver
var jogadorPerdeu = false;
//código
function criaTickRate() {
    tickRate += 0.5;
}
function criaNavesInimigas() {
    for(let i = 0; i < wave1ImagemInimigos.length; i ++){
        if(wave1InimigoVivo[i] === true) {
            image(wave1ImagemInimigos[i], wave1XInimigo[i], wave1YInimigo[i], larguraInimigo, alturaInimigo);
        }
    }
    for(let i = 0; i < wave2ImagemInimigos.length; i ++) {
        if(wave1InimigoVivo[0, 1, 2, 3] === false && wave2InimigoVivo[i] === true && laserPego === true) {
            image(wave2ImagemInimigos[i], wave2XInimigo[i], wave2YInimigo[i], larguraInimigo, alturaInimigo);
        }
    }
}
function movimentaInimigo() {
    //wave 1
    for(let i = 0; i < wave1ImagemInimigos.length; i ++) {
        if(wave1YInimigo[i] !== wave1YInimigoDesce) {
            wave1YInimigo[i] += velocidadeInimigo;
        }
        if(wave1XInimigo[i] === wave1XInimigoMaximo[i] && wave1InimigoVivo[i] === true) {
            podeIrParaDireita = false;
            podeIrParaEsquerda = true;
        }
        if(wave1XInimigo[i] === wave1XInimigoMinimo[i] && wave1InimigoVivo[i] === true) {
            podeIrParaEsquerda = false;
            podeIrParaDireita = true
        }
        if(podeIrParaDireita === true && wave1YInimigo[i] === wave1YInimigoDesce) {
            wave1XInimigo[i] += velocidadeInimigo;
        }
        if(podeIrParaEsquerda === true && wave1YInimigo[i] === wave1YInimigoDesce) {
            wave1XInimigo[i] -= velocidadeInimigo;
        }
    }
    //wave 2
    for(let i = 0; i < wave2ImagemInimigos.length; i ++) {
        if(wave1InimigoVivo[0, 1, 2, 3] === false) {
            if(wave2YInimigo[i] !== wave2YInimigoDesce && laserPego === true) {
                wave2YInimigo[i] += velocidadeInimigo;
            }
            if(wave2XInimigo[i] === wave2XInimigoMaximo[i] && wave2InimigoVivo[i] === true && laserPego === true) {
                podeIrParaDireita = false;
                podeIrParaEsquerda = true;
            }
            if(wave2XInimigo[i] === wave2XInimigoMinimo[i] && wave2InimigoVivo[i] === true && laserPego === true) {
                podeIrParaEsquerda = false;
                podeIrParaDireita = true
            }
            if(podeIrParaDireita === true && wave2YInimigo[i] === wave2YInimigoDesce && laserPego === true) {
                wave2XInimigo[i] += velocidadeInimigo;
            }
            if(podeIrParaEsquerda === true && wave2YInimigo[i] === wave2YInimigoDesce && laserPego === true) {
                wave2XInimigo[i] -= velocidadeInimigo;
            }
        }
    }
}
function criaTiroInimigo() {
    //wave 1
    for(let i = 0; i < wave1ImagemInimigos.length; i ++) {
        if(tickRate%64 === 0 && wave1YInimigo[i] === 150) {
            wave1TiroInimigoChamado = true;
            wave1XTiroInimigo[i] = wave1XInimigo[i];
            wave1YTiroInimigo[i] = wave1YInimigo[i];
            wave1TiroPodeExistir[i] = true;
        }
        if(wave1TiroInimigoChamado === true && wave1InimigoVivo[i] === true && wave1TiroPodeExistir[i] === true) {
            wave1YTiroInimigo[i] += velocidadeTiro;
            fill(255, 0, 0);
            strokeWeight(1.5);
            stroke(0);
            rect(wave1XTiroInimigo[i] + 13, wave1YTiroInimigo[i] + 20, larguraDoTiro, alturaDoTiro);
        }
        if(wave1YTiroInimigo[i] > alturaDaTela) {
            wave1TiroInimigoChamado = false;
        }
    }
    //wave 2
    for(let i = 0; i < wave2ImagemInimigos.length; i ++) {
        if(tickRate%64 === 0 && wave2YInimigo[i] === 150 && laserPego === true) {
            wave2TiroInimigoChamado = true;
            wave2XTiroInimigo[i] = wave2XInimigo[i];
            wave2YTiroInimigo[i] = wave2YInimigo[i];
            wave2TiroPodeExistir[i] = true;
        }
        if(wave2TiroInimigoChamado === true && wave2InimigoVivo[i] === true && wave2TiroPodeExistir[i] === true && laserPego === true) {
            wave2YTiroInimigo[i] += velocidadeTiro;
            fill(255, 0, 0);
            strokeWeight(1.5);
            stroke(0);
            rect(wave2XTiroInimigo[i] + 13, wave2YTiroInimigo[i] + 20, larguraDoTiro, alturaDoTiro);
        }
        if(wave2YTiroInimigo[i] > alturaDaTela && laserPego === true) {
            wave2TiroInimigoChamado = false;
        }
    }
}
function colisaoTiroInimigoComANave() {
    //wave 1
    for(let i = 0; i < wave2ImagemInimigos.length; i ++) {
        if(xNave + larguraNave > wave1XTiroInimigo[i] && xNave < wave1XTiroInimigo[i] + larguraDoTiro && yNave - alturaNave < wave1YTiroInimigo[i] && yNave + alturaNave > wave1YTiroInimigo[i]) {
            naveViva = false;
            wave1TiroPodeExistir[i] = false;
            jogadorPerdeu = true;
        }
        if(jogadorPerdeu === true) {
            gameOver();
            wave1InimigoVivo[i] = false;
            wave2InimigoVivo[i] = false;
        }
    }
    //wave 2
    for(let i = 0; i < wave2ImagemInimigos.length; i ++) {
        if(xNave + larguraNave > wave2XTiroInimigo[i] && xNave < wave2XTiroInimigo[i] + larguraDoTiro && yNave - alturaNave < wave2YTiroInimigo[i] && yNave + alturaNave > wave2YTiroInimigo[i] && laserPego === true) {
            naveViva = false;
            wave2TiroPodeExistir[i] = false;
            jogadorPerdeu = true;
        }
    }
}
function gameOver() {
    stroke(0);
    textAlign(CENTER);
    textSize(100);
    fill(255, 0, 0);
    text("GAME OVER", larguraDaTela/2 - 20, alturaDaTela/2 + 20)
}