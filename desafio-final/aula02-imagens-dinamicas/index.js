function onLoad() {
    const dependencias    = {
        tela: Tela //a classe Tela e global
    }
    //inicializamos o jogo da memoria
    const jogoDaMemoria = new JogoDaMemoria(dependencias)
    jogoDaMemoria.inicializar()
}
window.onload = onLoad