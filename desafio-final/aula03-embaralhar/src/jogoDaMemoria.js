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
        //força a tela a usar o this de Jogo da Memoria
        this.tela.configurarBotaoJogar(this.jogar.bind(this))
    }
    embaralhar () {
        const copias = this.heroisIniciais
        //duplicar os itens
        .concat(this.heroisIniciais)
        //entrar em cada item e criar um id aleatorio
        .map(item => {
            return Object.assign({}, item, { id: Math.random() / 0.5})
        })
        //ordenar aleatorio as imagens
        .sort(() => Math.random() - 0.5)
        this.tela.atualizarImagens(copias)

    }

    jogar () {
        this.embaralhar()
    }

}