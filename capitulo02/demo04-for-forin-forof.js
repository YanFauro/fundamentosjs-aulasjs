const textoPar = "par"
const textoImpar = "impar"
// for(let index = 0; index <= 10; index++) {
//     const decisao = index % 2 === 0 ? textoPar : textoImpar
//     console.log(`o número ${index} é ${decisao}`)
// }

const minhaListaDeTarefas = [
    {
        id: parseInt(Math.random() * 10),
        nome: 'Zezinho',
        SuperPoder: 'Veloz'
    },
    {
        id: Math.random(),
        nome: 'Mariazinha',
        SuperPoder: 'Super Força'
    }
]
for(let index = 0; index < minhaListaDeTarefas.length; index++){
    const item = minhaListaDeTarefas[index]
    console.log(
        `
        id: ${item.id}
        nome: ${item.nome}
        SuperPoder: ${item.SuperPoder}
        `
    )
}

// nao precisa do contador
for(const index in minhaListaDeTarefas) {
    const item = minhaListaDeTarefas [index]
    console.log("Nome", item.nome,
    "Super Poder", item.SuperPoder)
}

//nao precisar usar indice(index)
for(const item of minhaListaDeTarefas){
    console.log("Nome", item.nome)
}