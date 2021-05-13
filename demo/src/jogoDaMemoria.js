class JogoDaMemoria{
    //se manda um obj = {tela :1, idade: 2, etc:3}
    //vai ignorar o resto das propriedades e pegar somente a propriedade
    //tela
    constructor ({tela, util}) {
        this.tela = tela
        this.util = util
        //o caminho e sempre relativo ao index.html
        this.heroisIniciais = [
            {img: './arquivos/batman.png', nome: 'batman'},
            {img: './arquivos/deadpool.png', nome: 'deadpool'},
            {img: './arquivos/flash.png', nome: 'flash'},
            {img: './arquivos/homemaranha.png', nome: 'homemaranha'},
        ]
        this.iconePadrao = './arquivos/padrao.png'
        this.heroisEscondidos = []
        this.heroisSelecionados = []
        
    }
    // para usar o this, nao podemos usar static!
    inicializar(){
        //vai pegar todas as funcoes da class tela
        //coloca toos os herois na tela
        this.tela.atualizarImagens(this.heroisIniciais)
        //força a tela a usar o this de Jogo da Memoria
        this.tela.configurarBotaoJogar(this.jogar.bind(this))
        this.tela.configurarBotaoVerificarSelecao(this.verificarSelecao.bind(this))
        this.tela.configurarBotaoMostrarTudo(this.mostrarHeroisEscondidos.bind(this))
    }
    async embaralhar () {
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
        this.tela.exibirCarregando()

        const idDoIntervalo = this.tela.iniciarContador ()

        //vamos esperar 3 segundo para atualizar a tela
        await this.util.timeout(3000)
        this.tela.limparContador (idDoIntervalo)
        this.esconderHerois (copias)
        this.tela.exibirCarregando(false)
        

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
        this.heroisEscondidos = heroisOcultos
    }
    exibirHerois(nomeDoHeroi){
        //vamos procurar esse heroi pel nome em nosso heroisIniciais
        //vamos obter somente a imagem dele
        const {img} = this.heroisIniciais.find (({nome}) => nomeDoHeroi === nome)
        //vamos criar a funcao na tela, para exibir somente o heroi selecionado
        this.tela.exibirHerois(nomeDoHeroi, img)
    }


    verificarSelecao(id, nome) {
        const item = {id, nome}
        //vamos verificar a quantidade de herois selecionados
        //e tomar açao se estiver correto ou errado
        const heroisSelecionados = this.heroisSelecionados.length
        switch(heroisSelecionados) {
            case 0:
                //adiciona a esclha na lista, esperando pela proxima
                //clicada
                this.heroisSelecionados.push(item)
                break; 
            case 1: 
            //se a quantidade de escolhidos for 1, significa
            //que o usuario so pode escolher mais um
            //vamos obter o primeiro item da lista
            const [ opcao1 ] = this.heroisSelecionados
            // zerar itens para nao selecionar mais de dois
            this.heroisSelecionados = []
            //conferir se os nomes e os ids batem conforme o esperado
            if(opcao1.nome === item.nome &&
                //aqui verificamos se sao ids diferentes para
                //o usuario nao clicar duas vezes no mesmo
                opcao1.id !== item.id
                ) {
                    this.exibirHerois(item.nome)
                    //como o padrao e true, nao precisa passar nada
                    this.tela.exibirMensagem()
                    ///para a execucao
                    return;
                }
                this.tela.exibirMensagem(false)
                //fim do case!
                break;
        }
    }
    mostrarHeroisEscondidos() {
        //vamos pegar todos os herois da tela e colocar seu
        //respectivo valor correto
        const heroisEscondidos = this.heroisEscondidos
        for(const heroi of heroisEscondidos) {
            const {img} = this.heroisIniciais.find(item => item.nome === heroi.nome)
            heroi.img = img
        }
        this.tela.atualizarImagens(heroisEscondidos)
    }

    jogar () {
        this.embaralhar()
    }

}