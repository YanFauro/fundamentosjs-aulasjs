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
        this.iconePadrao = './arquivos/padrao.png'
        this.heroisEscondidos = []
        
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
        //vamos esperar 1 segundo para atualizar a tela
        setTimeout(() => {
            this.esconderHerois (copias)
        }, 1000);

    }
    esconderHerois(herois) {
        //vamos trocar a imagem de todos os herois existentes
        //pelo icone padrao
        //como fizemos no construtor, vamos extrair somente o necessario
        //usando a sintaxe ({chave: 1}) estamos falando que vamos retornar 
        //o que tiver dentro dos parenteses
        //quando nao usamos : (exemplo de id), o JS entende que o nome
        // e o mesmo do valor. Ex. id, vira id,
        const heroisOcultos = herois.map(( { nome, id})=> ({
            id,
            nome,
            img: this.iconePadrao
        }))
        //atualizamos a tela com herois ocultos
        this.tela.atualizarImagens(heroisOcultos)
        //guardamos os herois para trabalhar com 
        // eles depois
        this.heroisOcultos = heroisOcultos
    }

    jogar () {
        this.embaralhar()
    }

}