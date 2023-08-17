//código do movimento
function keyTyped() {
    if(podeAtirar === true) {
        if(key === "z") {
            tiroChamado = true;
            tiroSaiuDaNave = true;
            podeAtirar = false;
        }
    }
    if(key === "x" && laserPego === true) {
        laserAtivo = true;
    } else {
        laserAtivo = false;
    }
    return false;
}