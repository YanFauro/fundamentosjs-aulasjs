const podeDirigir= true
if(podeDirigir) {console.log('Ela pode Digirir')}


const saldoEmConta = 0
if(!saldoEmConta){console.log('não tem saldo')}


//Força o valor a true ou false
//de acordo com a tabela

const boolComString = "ae hackerzão"
console.log('boolComString', !!boolComString)

//negação
console.log('negação', !boolComString)

//negação + forçar a bool
console.log('negação + forçar a bool', ! (!!boolComString))