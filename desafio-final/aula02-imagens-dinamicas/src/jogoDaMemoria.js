class JogoDaMemoria{
    //se manda um obj = {tela :1, idade: 2, etc:3}
    //vai ignorar o resto das propriedades e pegar somente a propriedade
    //tela
    constructor ({tela}) {
        this.tela = tela
        //o caminho e sempre relativo ao index.html
        this.heroisIniciais = [
            {img: './arquivos/batman.png', name: 'batman'},
            {img: './arquivos/deadpool.png', name: 'deadpool'},
            {img: './arquivos/flash.png', name: 'flash'},
            {img: './arquivos/homemaranha.png', name: 'homemaranha'},
        ]
        
    }
    // para usar o this, nao podemos usar static!
    inicializar(){
        //vai pegar todas as funcoes da class tela
        //coloca toos os herois na tela
        this.tela.atualizarImagens(this.heroisIniciais)
    }

}